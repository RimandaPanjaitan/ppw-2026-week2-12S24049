// Presentation Layer & UI Logic
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

class App {
  static projects = [];

  static async init() {
    this.renderLoadingState();
    try {
      this.projects = await ApiService.getProjects();
      this.renderProjects(this.projects);
      this.setupFormHandler();
    } catch (error) {
      this.renderErrorState('Gagal memuat data dari server JSON.');
    }
  }

  static renderLoadingState() {
    const container = document.getElementById('projectGridContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="spinner-border text-pink" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2 text-muted">Memuat data proyek...</p>
      </div>
    `;
  }

  static renderErrorState(message) {
    const container = document.getElementById('projectGridContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="col-12">
        <div class="alert alert-danger text-center" role="alert">
          <i class="bi bi-exclamation-triangle-fill me-2"></i> ${message}
        </div>
      </div>
    `;
  }

  static renderProjects(items) {
    const container = document.getElementById('projectGridContainer');
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `<div class="col-12 text-center py-4 text-muted">Tidak ada proyek yang ditemukan.</div>`;
      return;
    }

    container.innerHTML = items.map(p => `
      <div class="col">
        <div class="card h-100 border-0 shadow-sm rounded-4 project-card">
          <img src="${p.thumbnail}" class="card-img-top rounded-top-4" alt="${p.title}" style="height: 180px; object-fit: cover;">
          <div class="card-body p-4 d-flex flex-column">
            <h3 class="h5 card-title fw-bold my-2">${p.title}</h3>
            <p class="card-text text-muted small flex-grow-1">${p.shortDescription}</p>
            <div>
              <span class="badge bg-pink-light text-pink mb-3">${p.tags.join(' • ')}</span>
              <button type="button" class="btn button-primary w-100 btn-sm" onclick="App.openProjectModal('${p.id}')">
                Detail Proyek ✦
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  static escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  static openProjectModal(projectId) {
    const proj = this.projects.find(p => p.id === projectId);
    if (!proj) return;

    document.getElementById('projectModalTitle').textContent = `✦ ${proj.title}`;
    document.getElementById('projectModalBody').innerHTML = `
      <img src="${proj.thumbnail}" class="img-fluid rounded-3 mb-3 w-100" style="max-height: 250px; object-fit: cover;" alt="${proj.title}">
      <p class="text-secondary">${this.escapeHTML(proj.fullDescription)}</p>
      <div class="p-3 bg-light rounded-3 mb-3">
        <strong>Status / Metrics:</strong> ${proj.metrics}
      </div>
      <div class="d-flex gap-2">
        ${proj.tags.map(t => `<span class="badge bg-secondary">${t}</span>`).join('')}
      </div>
    `;

    const modalEl = document.getElementById('universalProjectModal');
    if (modalEl && window.bootstrap) {
      bootstrap.Modal.getOrCreateInstance(modalEl).show();
    }
  }

  static setupFormHandler() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Mengirim...';

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      try {
        await ApiService.submitServiceOrder(payload);
        
        // Simpan ke localStorage
        const history = JSON.parse(localStorage.getItem('service_orders') || '[]');
        history.push({ ...payload, date: new Date().toLocaleString() });
        localStorage.setItem('service_orders', JSON.stringify(history));

        alert('♡ Permintaan layanan berhasil terkirim dan disimpan!');
        form.reset();
      } catch (err) {
        alert('Gagal mengirim permintaan layanan.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }
}