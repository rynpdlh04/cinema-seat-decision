
/*
 * CinemaSeat Decision System
 * Dataset kursi bioskop
 * Seed dataset: 72 (dua digit terakhir NIM)
 */

const cinemaSeats = [
    {
        id: "S072",
        row: "A",
        number: 1,
        price: 25000,
        status: "occupied",
        time: "13:00"
    },
    {
        id: "S073",
        row: "A",
        number: 2,
        price: 25000,
        status: "available",
        time: "13:00"
    },
    {
        id: "S074",
        row: "A",
        number: 3,
        price: 25000,
        status: "available",
        time: "13:00"
    },
    {
        id: "S075",
        row: "A",
        number: 4,
        price: 25000,
        status: "booked",
        time: "13:00"
    },
    {
        id: "S076",
        row: "B",
        number: 1,
        price: 30000,
        status: "available",
        time: "15:30"
    },
    {
        id: "S077",
        row: "B",
        number: 2,
        price: 30000,
        status: "available",
        time: "15:30"
    },
    {
        id: "S078",
        row: "B",
        number: 3,
        price: 30000,
        status: "occupied",
        time: "15:30"
    },
    {
        id: "S079",
        row: "B",
        number: 4,
        price: 30000,
        status: "available",
        time: "15:30"
    },
    {
        id: "S080",
        row: "C",
        number: 1,
        price: 35000,
        status: "available",
        time: "18:00"
    },
    {
        id: "S081",
        row: "C",
        number: 2,
        price: 35000,
        status: "available",
        time: "18:00"
    },
    {
        id: "S082",
        row: "C",
        number: 3,
        price: 35000,
        status: "available",
        time: "18:00"
    },
    {
        id: "S083",
        row: "C",
        number: 4,
        price: 35000,
        status: "booked",
        time: "18:00"
    }
];

// Data awal untuk mengembalikan simulasi ke kondisi semula.
const initialCinemaSeats = cinemaSeats.map(seat => ({ ...seat }));

// Mengubah kode status menjadi label yang mudah dipahami.
function getStatusLabel(status) {
    switch (status) {
        case "available":
            return "Tersedia";
        case "occupied":
            return "Terisi";
        case "booked":
            return "Dipesan";
        default:
            return "Tidak diketahui";
    }
}

// Format harga ke format Rupiah.
function formatRupiah(amount) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(amount);
}
