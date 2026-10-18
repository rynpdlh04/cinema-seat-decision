
document.addEventListener("DOMContentLoaded", function () {
    renderSeatTable();
});

function renderSeatTable() {
    const tableBody = document.getElementById("seatTableBody");

    // Jika halaman ini tidak memiliki tabel dataset,
    // hentikan fungsi tanpa menghasilkan error.
    if (!tableBody || typeof cinemaSeats === "undefined") {
        return;
    }

    tableBody.innerHTML = "";

    let availableCount = 0;
    let unavailableCount = 0;

    for (const seat of cinemaSeats) {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = seat.id;

        const rowCell = document.createElement("td");
        rowCell.textContent = seat.row;

        const numberCell = document.createElement("td");
        numberCell.textContent = seat.number;

        const priceCell = document.createElement("td");
        priceCell.textContent = formatRupiah(seat.price);

        const timeCell = document.createElement("td");
        timeCell.textContent = seat.time;

        const statusCell = document.createElement("td");
        statusCell.textContent = getStatusLabel(seat.status);
        statusCell.classList.add("status", `status-${seat.status}`);

        row.append(
            idCell,
            rowCell,
            numberCell,
            priceCell,
            timeCell,
            statusCell
        );

        tableBody.appendChild(row);

        if (seat.status === "available") {
            availableCount++;
        } else {
            unavailableCount++;
        }
    }

    document.getElementById("totalSeats").textContent =
        cinemaSeats.length;

    document.getElementById("availableSeats").textContent =
        availableCount;

    document.getElementById("unavailableSeats").textContent =
        unavailableCount;

    document.getElementById("tableSummary").textContent =
        `Dataset terdiri dari ${cinemaSeats.length} kursi: ` +
        `${availableCount} tersedia dan ${unavailableCount} tidak tersedia.`;
}
