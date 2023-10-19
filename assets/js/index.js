$(document).ready(function () {
    AOS.init();
    let filterArray = [];
    let articleArray = [
        {
            id: 1,
            category: "Cyber Security",
            name: "Data Bank Syariah Indonesia Diduga Bocor, Pakar Imbau Nasabah Ganti Password dan Pin ATM",
            imgSrc: "https://images.unsplash.com/photo-1624969862644-791f3dc98927?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070",
            desc: "Baca artikel ini",
            url: "./../../pages/single_page.html",
        },
        {
            id: 2,
            category: "Hacker",
            name: "Hacker Bjorka is Back, Data Apa Saja yang Pernah Dibocorkan?",
            imgSrc: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            desc: "Baca artikel ini",
            url: "./../../pages/page2.html",
        },
        {
            id: 3,
            category: "Hacker",
            name: "Raditya Dika Pusing Akun YouTube Miliknya Diretas",
            imgSrc: "https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "Baca artikel ini",
            url: "./../../pages/page3.html",
        },
        {
            id: 4,
            category: "Data",
            name: "Hacker 16 Tahun Bobol Database Kejagung, Motifnya Iseng!",
            imgSrc: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "Baca artikel ini",
            url: "./../../pages/page4.html",
        },
        {
            id: 5,
            category: "Data",
            name: "28.000 Data Polri Disebut Bocor, Ini Analisis Pengamat",
            imgSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "Baca artikel ini",
            url: "./../../pages/page5.html",
        },
        {
            id: 6,
            category: "Data",
            name: "Kronologi Dugaan Kebocoran Data eHAC Kemenkes",
            imgSrc: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "Baca artikel ini",
            url: "./../../pages/page6.html",
        },
        {
            id: 7,
            category: "Hacker",
            name: "Dalih Peretasan Situs KPU di Balik Transparansi Suara Pilkada",
            imgSrc: "https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
            desc: "Baca artikel ini",
            url: "./../../pages/page7.html",
        },
        {
            id: 8,
            category: "Hacker",
            name: "Cerita Remaja 19 Tahun Peretas Situs Tiket.com dan Raup Hampir Rp 1 Miliar",
            imgSrc: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "Baca artikel ini",
            url: "./../../pages/page8.html",
        },
        {
            id: 9,
            category: "Hacker",
            name: "Cerita Lengkap Bocornya 91 Juta Data Akun Tokopedia",
            imgSrc: "https://images.unsplash.com/photo-1537770846878-f79ea627a64b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "Baca artikel ini",
            url: "./../../pages/page9.html",
        },
        {
            id: 10,
            category: "Cyber Security",
            name: "Pakar Ulas Peretasan Situs DPR Jadi 'Dewan Penghianat Rakyat",
            imgSrc: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974",
            desc: "Baca artikel ini",
            url: "./../../pages/page10.html",
        },
        {
            id: 11,
            category: "Cyber Security",
            name: "Begini Kronologi Peretasan Situs Berita Tempo.co hingga Kembali Pulih",
            imgSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "Baca artikel ini",
            url: "./../../pages/page11.html",
        },
        {
            id: 12,
            category: "Hacker",
            name: "Kronologi dan Motif Peretasan Situs Setkab oleh Dua Remaja...",
            imgSrc: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2069",
            desc: "Baca artikel ini",
            url: "./../../pages/page12.html",
        },
        {
            id: 13,
            category: "Hacker",
            name: "BPJS Kesehatan Akui Ada Kemungkinan Peretasan Data 279 Juta Warga RI",
            imgSrc: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1925",
            desc: "Baca artikel ini",
            url: "./../../pages/page13.html",
        },
        {
            id: 14,
            category: "Cyber Security",
            name: "BRI Life Beberkan Hasil Investigasi Data Nasabah Bocor",
            imgSrc: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "Baca artikel ini",
            url: "./../../pages/page14.html",
        },
        {
            id: 15,
            category: "Cyber Security",
            name: "Analisis Ahli Terkait YouTube BNPB Diretas",
            imgSrc: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "Baca artikel ini",
            url: "./../../pages/page15.html",
        },
    ];

    function showArticle(array, category) {
        $("#articleList").empty();

        for (let i = 0; i < array.length; i++) {
            // Periksa apakah artikel sesuai dengan kategori yang dipilih
            if (category === "all" || array[i].category === category) {
                $("#articleList").append(`
                    <div class="col-md-4 mb-4 newsJS">
                        <div class="card w-100 h-100" data-aos="fade-up" data-aos-delay="${
                            100 * i
                        }">
                            <img src="${array[i].imgSrc}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${array[i].name}</h5>
                                <a class="btn btn-warning" target="_blank" href="${
                                    array[i].url
                                }">${array[i].desc}</a>
                            </div>
                        </div>
                    </div>`);
            }
        }

        AOS.refresh();
    }

    // Handler untuk perubahan kategori
    $("#categorySelect").change(function () {
        const selectedCategory = $(this).val();
        showArticle(articleArray, selectedCategory);
    });

    $("#filterInput").keyup(function () {
        let text = $(this).val().toLowerCase();

        filterArray = articleArray.filter(function (a) {
            return a.name.toLowerCase().includes(text);
        });

        if (text === "") {
            showArticle(articleArray, $("#categorySelect").val());
        } else {
            if (filterArray.length === 0) {
                $("#notFound").show();
                $("#articleList").empty();
            } else {
                showArticle(filterArray, $("#categorySelect").val());

                $("#articleList .card").each(function (index) {
                    $(this).attr("data-aos", "fade-up");
                    $(this).attr("data-aos-delay", 100 * index); // Sesuaikan keterlambatan sesuai kebutuhan
                });

                AOS.refresh();
                AOS.init();
                $("#notFound").hide();
            }
        }
    });

    // Inisialisasi tampilan awal artikel
    showArticle(articleArray, "all");
});

const inputField = document.getElementById("filterInput");

inputField.addEventListener("input", function () {
    const inputValue = inputField.value;
    if (isValid(inputValue)) {
        inputField.style.color = "red";
    } else {
        inputField.style.color = "black";
    }
});

function isValid(value) {
    return value.length >= 4;
}
