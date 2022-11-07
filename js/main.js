function domID(id) {
    return document.getElementById(id);
}
domID('cal').onclick = function () {
    const height = domID('height').value;
    const weight = domID('weight').value;
    var outputImg = domID('outputImg');
    var output = domID('output');

    var heightError = domID('heightError');
    var weightError = domID('weightError');
    // biến cờ hiệu 
    var heightStatus = false;
    var weightStatus = false;
    // kiểm tra hợp lệ
    if (height == '' || height <= 0 || isNaN(height))
        heightError.innerHTML = 'Nhập chiều cao không hợp lệ';
    else
        heightStatus = true;
    if (weight == '' || weight <= 0 || isNaN(weight))
        weightError.innerHTML = 'Nhập cân nặng không hợp lệ';
    else
        weightStatus = true;
    if (heightStatus && weightStatus) {
        // hàm toFixed làm tròn số sau dấu phẩy
        const bmi = (weight / (height * height /10000)).toFixed(2);
        // chiều cao đơn vị là mét đổi sang cm chia cho 100, 2 cái height là 10000
        if (bmi < 18.5) {
            output.innerHTML = 'Gầy : ' + bmi;
            outputImg.src = './img/body-1.png';
        } else if (bmi >= 18.5 && bmi < 24) {
            output.innerHTML = 'Bình thường : ' + bmi;
            outputImg.src = './img/body-2.png';
        } else if (bmi >= 24 && bmi < 30) {
            output.innerHTML = 'Tăng cân : ' + bmi;
            outputImg.src = './img/body-3.png';
        } else if (bmi >= 30 && bmi < 35) {
            output.innerHTML = 'Béo phì độ 1 : ' + bmi;
            outputImg.src = './img/body-4.png';
        } else if (bmi >= 35 && bmi < 40) {
            output.innerHTML = 'Béo phì độ 2 : ' + bmi;
            outputImg.src = './img/body-5.png';
        } else {
            output.innerHTML = 'Béo phì độ 3 : ' + bmi;
            outputImg.src = './img/body-6.png';
        }

    }
}