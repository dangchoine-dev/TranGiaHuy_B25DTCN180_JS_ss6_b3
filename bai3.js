let memberCard = "";
let memberRank = "";
let isValidCard = false;

let towel = 0;
let lock = 0;

do {
    console.log("\n========== GYM FITNESS ==========");
    console.log("1. Tiếp nhận thẻ hội viên");
    console.log("2. Ghi nhận vật tư mượn thêm");
    console.log("3. In phiếu bàn giao tủ đồ");
    console.log("4. Đóng ca và thoát");

    let choice = prompt("Chọn chức năng: ");

    switch (choice) {
        case "1":
            memberCard = prompt("Nhập mã thẻ: ");
            memberCard = memberCard.trim().toUpperCase();

            if (memberCard.startsWith("GYM-VIP-")) {
                memberRank = "VIP";
                isValidCard = true;
                console.log("Thẻ VIP hợp lệ - cấp tủ ZONE-A");
            } else if (memberCard.startsWith("GYM-STANDARD-")) {
                memberRank = "STANDARD";
                isValidCard = true;
                console.log("Thẻ STANDARD hợp lệ - cấp tủ ZONE-B");
            } else {
                isValidCard = false;
                console.log("Thẻ không hợp lệ!");
            }
            break;

        case "2":
            if (!isValidCard) {
                console.log("Vui lòng xác thực thẻ trước!");
                break;
            }

            let material = prompt("Nhập vật tư, ví dụ TOWEL:2|LOCK:1: ");
            material = material.trim().toUpperCase();

            let start = 0;

            while (start < material.length) {
                let end = material.indexOf("|", start);

                if (end == -1) {
                    end = material.length;
                }

                let item = material.slice(start, end);
                let colon = item.indexOf(":");

                let name = item.slice(0, colon);
                let quantity = Number(item.slice(colon + 1));

                if (name == "TOWEL") {
                    towel += quantity;
                } else if (name == "LOCK") {
                    lock += quantity;
                }

                start = end + 1;
            }

            console.log("Đã ghi nhận vật tư!");
            break;

        case "3":
            if (!isValidCard) {
                console.log("Vui lòng xác thực thẻ trước!");
                break;
            }

            let towelFee = 0;

            if (memberRank == "VIP") {
                if (towel > 1) {
                    towelFee = (towel - 1) * 20000;
                }
            } else {
                towelFee = towel * 20000;
            }

            let lockFee = lock * 15000;
            let totalFee = towelFee + lockFee;
            let deposit = (towel + lock) * 50000;

            let zone = "";
            let note = "";

            if (memberRank == "VIP") {
                zone = "ZONE-A";
                note = "Miễn phí 1 khăn tắm lớn";
            } else {
                zone = "ZONE-B";
                note = "Vật tư mượn thêm tính phí";
            }

            console.log("\n" + "-".repeat(50));
            console.log("              PHIẾU BÀN GIAO TỦ ĐỒ");
            console.log("-".repeat(50));
            console.log(`Mã thẻ       : ${memberCard.padEnd(25)}`);
            console.log(`Hạng         : ${memberRank.padEnd(25)}`);
            console.log(`Khu vực tủ   : ${zone.padEnd(25)}`);
            console.log("-".repeat(50));
            console.log(`Khăn tắm     : ${String(towel).padStart(3)} chiếc`);
            console.log(`Khóa tủ phụ  : ${String(lock).padStart(3)} chiếc`);
            console.log("-".repeat(50));
            console.log(`Phụ phí khăn : ${towelFee.toLocaleString()} VNĐ`);
            console.log(`Phụ phí khóa : ${lockFee.toLocaleString()} VNĐ`);
            console.log(`TỔNG PHỤ PHÍ : ${totalFee.toLocaleString()} VNĐ`);
            console.log(`Tiền cọc     : ${deposit.toLocaleString()} VNĐ`);
            console.log(`Ghi chú      : ${note}`);
            console.log("-".repeat(50));
            break;

        case "4":
            console.log("Đã đóng ca làm việc!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }

} while (choice != "4");