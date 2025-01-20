document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("career-form");
  const result = document.getElementById("result");
  const recommendation = document.getElementById("recommendation");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Ambil data dari formulir
    const name = document.getElementById("name").value;
    const interest = document.getElementById("interest").value;
    const skill = document.getElementById("skill").value.toLowerCase();
    const preference = document.getElementById("preference").value;

    // Tentukan jurusan berdasarkan minat
    let jurusan = [];
    let universitas = [];

    if (interest === "teknologi") {
      jurusan = ["Teknik Informatika", "Sistem Informasi"];
      universitas = ["Institut Teknologi Bandung (ITB)", "Universitas Gadjah Mada (UGM)"];
    } else if (interest === "seni") {
      jurusan = ["Desain Komunikasi Visual", "Seni Rupa"];
      universitas = ["Institut Seni Indonesia (ISI)", "Institut Teknologi Bandung (ITB)"];
    } else if (interest === "bisnis") {
      jurusan = ["Manajemen", "Akuntansi"];
      universitas = ["Universitas Indonesia (UI)", "Universitas Airlangga (UNAIR)"];
    } else if (interest === "kesehatan") {
      jurusan = ["Kedokteran", "Keperawatan"];
      universitas = ["Universitas Indonesia (UI)", "Universitas Padjadjaran (UNPAD)"];
    } else if (interest === "sains") {
      jurusan = ["Fisika", "Biologi"];
      universitas = ["Institut Teknologi Bandung (ITB)", "Universitas Gadjah Mada (UGM)"];
    }

    // Tampilkan hasil rekomendasi
    recommendation.innerHTML = `
      <strong>Hai, ${name}!</strong> Berdasarkan minatmu di bidang <strong>${interest}</strong>, 
      kami merekomendasikan jurusan:
      <ul>
        <li>${jurusan[0]}</li>
        <li>${jurusan[1]}</li>
      </ul>
      Kamu bisa mendaftar di universitas:
      <ul>
        <li>${universitas[0]}</li>
        <li>${universitas[1]}</li>
      </ul>
    `;
    result.classList.remove("hidden");
  });
});
