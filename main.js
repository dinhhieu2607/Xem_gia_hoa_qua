function giatien() {
    let qua = document.getElementById("loai_qua").value;
    let gia = 00000;
        switch (qua) {
                case "Ổi":
                gia =20000;
                document.getElementById("tien").innerHTML = gia + " VNĐ/kg";
                break;
        case "Dưa hấu":
                gia =20000;
                document.getElementById("tien").innerHTML = gia + " VNĐ/kg";
                break;
        case "Táo":
                gia =30000
                document.getElementById("tien").innerHTML = gia + " VNĐ/kg";
                break;
        case "Xoài":
                gia =30000;
                document.getElementById("tien").innerHTML = gia + " VNĐ/kg";
                break;
        case "Cam":
                gia =40000
                document.getElementById("tien").innerHTML = gia + " VNĐ/kg";
                break;
        case "Chôm Chôm":
                gia =40000
                document.getElementById("tien").innerHTML = gia + " VNĐ/kg";
                break;
        case "Măng Cụt":
                gia =50000
                document.getElementById("tien").innerHTML = gia + " VNĐ/kg";
                break;
                    }
}