// API Service Layer untuk mengambil data JSON secara asinkron
class ApiService {
  static async getProjects() {
    try {
      const response = await fetch('./data/projects.json');
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('[API Error] Gagal memuat proyek:', error);
      throw error;
    }
  }

  static async getServices() {
    try {
      const response = await fetch('./data/services.json');
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('[API Error] Gagal memuat layanan:', error);
      throw error;
    }
  }

  static async getProfile() {
    try {
      const response = await fetch('./data/profile.json');
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('[API Error] Gagal memuat profil:', error);
      throw error;
    }
  }

  static async submitServiceOrder(payload) {
    // Simulasi pengiriman data REST POST
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Pesanan layanan berhasil diproses!', timestamp: new Date().toISOString() });
      }, 800);
    });
  }
}