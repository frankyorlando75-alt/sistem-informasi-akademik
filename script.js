   // Data jadwal untuk setiap hari
        const scheduleData = {
            senin: [
                { jam: 1, waktu: "07:00 - 07:45", mapel: "Matematika", guru: "Ibu Yohana Mei", phone: "6281234567890" },
                { jam: 2, waktu: "07:45 - 08:30", mapel: "Matematika", guru: "Ibu Yohana Mei", phone: "6281234567890" },
                { jam: 3, waktu: "08:30 - 09:15", mapel: "MPKK", guru: "Bapak Franky Edison Djuang", phone: "6281234567891" },
                { jam: 4, waktu: "09:15 - 10:00", mapel: "MPKK", guru: "Bapak Franky Edison Djuang", phone: "6281234567891" },
                { jam: 5, waktu: "10:15 - 11:00", mapel: "Informatika", guru: "Bapak Paulus Moa", phone: "6281234567892" },
                { jam: 6, waktu: "11:00 - 11:45", mapel: "Informatika", guru: "Bapak Paulus Moa", phone: "6281234567892" },
                { jam: 7, waktu: "12:30 - 13:15", mapel: "Bahasa Inggris", guru: "Bapak Sebastianus Emanuel Muda ", phone: "6281234567893" },
                { jam: 8, waktu: "13:15 - 14:00", mapel: "Bahasa Inggris", guru: "Bapak Sebastianus Emanuel Muda ", phone: "6281234567893" }
            ],
            selasa: [
                { jam: 1, waktu: "07:00 - 07:45", mapel: "MPP", guru: "Ernati Nona Lies", phone: "6281234567894" },
                { jam: 2, waktu: "07:45 - 08:30", mapel: "MPP", guru: "Ernati Nona Lies", phone: "6281234567894" },
                { jam: 3, waktu: "08:30 - 09:15", mapel: "Bahasa Indonesia", guru: "Bapak Petrus Paskalis ", phone: "6281234567895" },
                { jam: 4, waktu: "09:15 - 10:00", mapel: "Bahasa Indonesia", guru: "Bapak Petrus Paskalis ", phone: "6281234567895" },
                { jam: 5, waktu: "10:15 - 11:00", mapel: "Matematika", guru: "Ibu Yohana Mei", phone: "6281234567890" },
                { jam: 6, waktu: "11:00 - 11:45", mapel: "Matematika", guru: "Ibu Yohana Mei", phone: "6281234567890" },
                { jam: 7, waktu: "12:30 - 13:15", mapel: "Pendidikan Agama", guru: "Bapak Sonny Koda", phone: "6281234567896" },
                { jam: 8, waktu: "13:15 - 14:00", mapel: "Pendidikan Agama", guru: "Bapak Sonny Koda", phone: "6281234567896" }
            ],
            rabu: [
                { jam: 1, waktu: "07:00 - 07:45", mapel: "MPKK", guru: "Bapak Franky Edison Djuang", phone: "6281234567891" },
                { jam: 2, waktu: "07:45 - 08:30", mapel: "MPKK", guru: "Bapak Franky Edison Djuang", phone: "6281234567891" },
                { jam: 3, waktu: "08:30 - 09:15", mapel: "Informatika", guru: "Bapak Paulus Moa", phone: "6281234567892" },
                { jam: 4, waktu: "09:15 - 10:00", mapel: "Informatika", guru: "Bapak Paulus Moa", phone: "6281234567892" },
                { jam: 5, waktu: "10:15 - 11:00", mapel: "Sejarah", guru: "Bapak Soekarno", phone: "6281234567897" },
                { jam: 6, waktu: "11:00 - 11:45", mapel: "Sejarah", guru: "Bapak Soekarno", phone: "6281234567897" },
                { jam: 7, waktu: "12:30 - 13:15", mapel: "Seni Budaya", guru: "Ibu Kartini", phone: "6281234567898" },
                { jam: 8, waktu: "13:15 - 14:00", mapel: "Seni Budaya", guru: "Ibu Kartini", phone: "6281234567898" }
            ],
            kamis: [
                { jam: 1, waktu: "07:00 - 07:45", mapel: "Bahasa Inggris", guru: "Bapak Sebastianus Emanuel Muda ", phone: "6281234567893" },
                { jam: 2, waktu: "07:45 - 08:30", mapel: "Bahasa Inggris", guru: "Bapak Sebastianus Emanuel Muda ", phone: "6281234567893" },
                { jam: 3, waktu: "08:30 - 09:15", mapel: "MPP", guru: "Ernati Nona Lies", phone: "6281234567894" },
                { jam: 4, waktu: "09:15 - 10:00", mapel: "MPP", guru: "Ernati Nona Lies", phone: "6281234567894" },
                { jam: 5, waktu: "10:15 - 11:00", mapel: "Matematika", guru: "Ibu Yohana Mei", phone: "6281234567890" },
                { jam: 6, waktu: "11:00 - 11:45", mapel: "Matematika", guru: "Ibu Yohana Mei", phone: "6281234567890" },
                { jam: 7, waktu: "12:30 - 13:15", mapel: "Pendidikan Jasmani", guru: "Bapak Yohan Gustaf Romeo", phone: "6281234567899" },
                { jam: 8, waktu: "13:15 - 14:00", mapel: "Pendidikan Jasmani", guru: "Bapak Yohan Gustaf Romeo", phone: "6281234567899" }
            ],
            jumat: [
                { jam: 1, waktu: "07:00 - 07:45", mapel: "Bahasa Indonesia", guru: "Bapak Petrus Paskalis ", phone: "6281234567895" },
                { jam: 2, waktu: "07:45 - 08:30", mapel: "Bahasa Indonesia", guru: "Bapak Petrus Paskalis ", phone: "6281234567895" },
                { jam: 3, waktu: "08:30 - 09:15", mapel: "MPKK", guru: "Bapak Franky Edison Djuang", phone: "6281234567891" },
                { jam: 4, waktu: "09:15 - 10:00", mapel: "MPKK", guru: "Bapak Franky Edison Djuang", phone: "6281234567891" },
                { jam: 5, waktu: "10:15 - 11:00", mapel: "PKN", guru: "Ibu Imelda Heret", phone: "6281234567800" },
                { jam: 6, waktu: "11:00 - 11:45", mapel: "PKN", guru: "Ibu Imelda Heret", phone: "6281234567800" }
            ]
        };

        // Warna untuk setiap mata pelajaran
        const subjectColors = {
            "Matematika": "bg-primary",
            "PWPB": "bg-success",
            "Informatika": "bg-danger",
            "MPP": "bg-warning",
            "Bahasa Inggris": "bg-info",
            "Bahasa Indonesia": "bg-secondary",
            "Pendidikan Agama": "bg-dark",
            "Sejarah": "bg-primary",
            "Seni Budaya": "bg-success",
            "Pendidikan Jasmani": "bg-danger",
            "PKN": "bg-warning"
        };

        let currentSelectedDay = 'senin';

        // Fungsi update waktu
        function updateCurrentTime() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            const timeString = now.toLocaleDateString('id-ID', options);
            
            const timeDisplay = document.getElementById('timeDisplay');
            const timeDisplayHome = document.getElementById('timeDisplayHome');
            
            if (timeDisplay) timeDisplay.textContent = timeString;
            if (timeDisplayHome) timeDisplayHome.textContent = timeString;
        }

        // Fungsi navigasi halaman
        function showPage(pageName) {
            // Sembunyikan semua halaman
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });

            // Hapus active dari semua nav links
            document.querySelectorAll('.navbar .nav-link').forEach(link => {
                link.classList.remove('active');
            });

            // Tampilkan halaman yang dipilih
            const pageMap = {
                'home': 'homePage',
                'jadwal': 'jadwalPage',
                'tentang': 'tentangPage'
            };

            const pageId = pageMap[pageName];
            const pageElement = document.getElementById(pageId);
            if (pageElement) {
                pageElement.classList.add('active');
            }

            // Set active pada nav link yang sesuai
            const navId = 'nav' + pageName.charAt(0).toUpperCase() + pageName.slice(1);
            const navElement = document.getElementById(navId);
            if (navElement) {
                navElement.classList.add('active');
            }
        }

        // Fungsi render jadwal
        function renderSchedule(day) {
            const tbody = document.getElementById('scheduleTableBody');
            const schedule = scheduleData[day];

            if (!schedule || schedule.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="5" class="text-center py-5">
                            <i class="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                            <p class="text-muted">Tidak ada jadwal untuk hari ini</p>
                        </td>
                    </tr>
                `;
                const totalSubjectsEl = document.getElementById('totalSubjects');
                if (totalSubjectsEl) totalSubjectsEl.textContent = '0';
                return;
            }

            const uniqueSubjects = [...new Set(schedule.map(item => item.mapel))];
            const totalSubjectsEl = document.getElementById('totalSubjects');
            if (totalSubjectsEl) totalSubjectsEl.textContent = uniqueSubjects.length;

            tbody.innerHTML = schedule.map(item => {
                const badgeColor = subjectColors[item.mapel] || 'bg-secondary';
                return `
                    <tr>
                        <td><span class="time-badge">${item.jam}</span></td>
                        <td><i class="fas fa-clock me-2 text-muted"></i>${item.waktu}</td>
                        <td><span class="badge ${badgeColor} badge-subject">${item.mapel}</span></td>
                        <td><i class="fas fa-user-tie me-2 text-muted"></i>${item.guru}</td>
                        <td>
                            <button class="btn btn-whatsapp btn-sm" onclick="sendWhatsApp('${item.phone}', '${item.guru}', '${item.mapel}', '${item.waktu}')">
                                <i class="fab fa-whatsapp me-1"></i> Hubungi
                            </button>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        // Fungsi pilih hari
        function selectDay(day) {
            document.querySelectorAll('#dayPills .nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            const selectedLink = document.querySelector(`#dayPills .nav-link[data-day="${day}"]`);
            if (selectedLink) {
                selectedLink.classList.add('active');
            }
            
            currentSelectedDay = day;
            
            const dayNames = {
                'senin': 'Senin',
                'selasa': 'Selasa',
                'rabu': 'Rabu',
                'kamis': 'Kamis',
                'jumat': 'Jumat'
            };
            
            const selectedDayEl = document.getElementById('selectedDay');
            if (selectedDayEl) {
                selectedDayEl.textContent = dayNames[day] || day;
            }
            
            renderSchedule(day);
        }

        // Fungsi kirim WhatsApp
        function sendWhatsApp(phone, guru, mapel, waktu) {
            const message = `Selamat Pagi ${guru},\n\n Mohon Maaaf Sebelumnya Saya ingin mengingatkan bahwa pelajaran *${mapel}* akan segera dimulai pada pukul *${waktu}*.\n\nTerima kasih.`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        }

        // Fungsi download JPG
        async function downloadAsJPG() {
    const spinner = document.getElementById("downloadSpinner");
    spinner.classList.add("show");

    const target = document.querySelector(".schedule-container");

    if (!target) {
        alert("Target download tidak ditemukan");
        spinner.classList.remove("show");
        return;
    }

    // pastikan elemen terlihat
    target.style.display = "block";

    await new Promise(resolve => setTimeout(resolve, 300));

    const canvas = await html2canvas(target, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true
    });

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpeg", 0.95);
    link.download = `Jadwal_KBM_${currentSelectedDay}.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    spinner.classList.remove("show");
}

        // Fungsi download PDF
        async function downloadAsPDF() {
    const spinner = document.getElementById("downloadSpinner");
    spinner.classList.add("show");

    const target = document.querySelector(".schedule-container");

    if (!target) {
        alert("Target download tidak ditemukan");
        spinner.classList.remove("show");
        return;
    }

    target.style.display = "block";

    await new Promise(resolve => setTimeout(resolve, 300));

    const canvas = await html2canvas(target, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.95);
    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "JPEG", 0, 10, pdfWidth, imgHeight);
    pdf.save(`Jadwal_KBM_${currentSelectedDay}.pdf`);

    spinner.classList.remove("show");
}

        // Inisialisasi
        document.addEventListener('DOMContentLoaded', function() {
            updateCurrentTime();
            setInterval(updateCurrentTime, 1000);
            renderSchedule('senin');
            
            console.log('✅ Sistem Informasi Akademik berhasil dimuat!');
            console.log('📚 Total jadwal tersedia:', Object.keys(scheduleData).length, 'hari');
        });