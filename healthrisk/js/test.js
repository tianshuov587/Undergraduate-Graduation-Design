function vte(obj) {
    var score = 0;
    if (obj.cancer == true) {
        score = score + 3;
    }
    else if (obj.cancer == false) {

    }

    if (obj.VTE == true) {
        score = score + 3;
    }
    else if (obj.VTE == false) {
    }

    if (obj.move == true) {
        score = score + 3;
    }
    else if (obj.move == false) {

    }

    if (obj.TC == true) {
        score = score + 3;
    }
    else if (obj.TC == false) {
    }

    if (obj.surgery == true) {
        score = score + 2;
    }
    else if (obj.surgery == false) {
    }

    if (obj.age >= 70) {
        score = score + 1;
    }
    else if (obj.age <= 70) {
    }

    if (obj.breath == true) {
        score = score + 1;
    }
    else if (obj.breath == false) {
    }

    if (obj.heart == true) {
        score = score + 1;
    }
    else if (obj.heart == false) {
    }

    if (obj.infect == true) {
        score = score + 1;
    }
    else if (obj.infect == false) {
    }

    if (obj.bmi >= 30) {
        score = score + 1;
    }
    else if (obj.bmi <= 30) {
    }
    if (score >= 4) {
        return '罹患機率偏高';
    }
    else if (score < 4)
        return '罹患機率極低';
}

function Coronary(obj) {
    let score = 0;
    if (obj.gender == "male") {
        if (obj.age >= 20 && obj.age <= 34) {
            score = score - 9;
        }
        else if (obj.age >= 35 && obj.age <= 39) {
            score = score - 4;
        }
        else if (obj.age >= 40 && obj.age <= 44) {

        }
        else if (obj.age >= 45 && obj.age <= 49) {
            score = score + 3;
        }
        else if (obj.age >= 50 && obj.age <= 54) {
            score = score + 6;
        }
        else if (obj.age >= 55 && obj.age <= 59) {
            score = score + 8;
        }
        else if (obj.age >= 60 && obj.age <= 64) {
            score = score + 10;
        }
        else if (obj.age >= 65 && obj.age <= 69) {
            score = score + 11;
        }
        else if (obj.age >= 70 && obj.age <= 74) {
            score = score + 12;
        }
        else if (obj.age >= 75 && obj.age <= 79) {
            score = score + 13;
        }

    }
    else if (obj.gender == "female") {
        if (obj.age >= 20 && obj.age <= 34) {
            score = score - 7;
        }
        else if (obj.age >= 35 && obj.age <= 39) {
            score = score - 3;
        }
        else if (obj.age >= 40 && obj.age <= 44) {

        }
        else if (obj.age >= 45 && obj.age <= 49) {
            score = score + 3;
        }
        else if (obj.age >= 50 && obj.age <= 54) {
            score = score + 6;
        }
        else if (obj.age >= 55 && obj.age <= 59) {
            score = score + 8;
        }
        else if (obj.age >= 60 && obj.age <= 64) {
            score = score + 10;
        }
        else if (obj.age >= 65 && obj.age <= 69) {
            score = score + 12;
        }
        else if (obj.age >= 70 && obj.age <= 74) {
            score = score + 14;
        }
        else if (obj.age >= 75 && obj.age <= 79) {
            score = score + 16;
        }

    }
    console.log(score)


    if (obj.gender == "male") {

        if (obj.HDL >= 60) {
            score = score - 1
        }
        else if (obj.HDL >= 50 && obj.HDL <= 59) {

        }
        else if (obj.HDL >= 40 && obj.HDL <= 49) {
            score = score + 1
        }
        else if (obj.HDL >= 60 && obj.HDL <= 59) {
            score = score + 2
        }

    }
    else if (obj.gender == "female") {
        if (obj.HDL >= 60) {
            score = score - 1
        }
        else if (obj.HDL >= 50 && obj.HDL <= 59) {

        }
        else if (obj.HDL >= 40 && obj.HDL <= 49) {
            score = score + 1
        }
        else if (obj.HDL >= 60 && obj.HDL <= 59) {
            score = score + 2
        }

    }
    console.log(score)


    if (obj.treated == true) {
        if (obj.gender == "male") {
            if (obj.SBP <= 120) {
            }
            else if (obj.SBP > 120 && obj.SBP <= 129) {
                score = score + 1
            }

            else if (obj.SBP >= 130 && obj.SBP <= 139) {
                score = score + 2
            }
            else if (obj.SBP >= 140 && obj.SBP <= 159) {
                score = score + 2
            }
            else if (obj.SBP >= 159) {
                score = score + 3
            }
        }
        else if (obj.gender == "female") {

            if (obj.SBP <= 120) {
            }

            else if (obj.SBP > 120 && obj.SBP <= 129) {
                score = score + 3
            }
            else if (obj.SBP >= 130 && obj.SBP <= 139) {
                score = score + 4
            }
            else if (obj.SBP >= 140 && obj.SBP <= 159) {
                score = score + 5
            }
            else if (obj.SBP >= 159) {
                score = score + 6
            }
        }

    }

    else if (obj.treated == false) {
        if (obj.gender == "male") {
            if (obj.SBP <= 120) {

            }
            else if (obj.SBP > 120 && obj.SBP <= 129) {

            }

            else if (obj.SBP > 130 && obj.SBP <= 139) {
                score = score + 1
            }
            else if (obj.SBP > 140 && obj.SBP <= 159) {
                score = score + 1
            }
            else if (obj.SBP >= 159) {
                score = score + 2
            }
        }
        else if (obj.gender == "female") {
            if (obj.SBP <= 120) {

            }

            else if (obj.SBP > 120 && obj.SBP <= 129) {
                score = score + 1
            }
            else if (obj.SBP > 130 && obj.SBP <= 139) {
                score = score + 2
            }
            else if (obj.SBP > 140 && obj.SBP <= 159) {
                score = score + 3
            }
            else if (obj.SBP >= 159) {
                score = score + 4
            }
        }
    }
    console.log(score)


    if (obj.smoke == true) {
        if (obj.gender == "male") {
            if (obj.age >= 20 && obj.age <= 39) {
                score = score + 8
            }
            else if (obj.age >= 40 && obj.age <= 49) {
                score = score + 5
            }
            else if (obj.age >= 50 && obj.age <= 59) {
                score = score + 3
            }
            else if (obj.age >= 60 && obj.age <= 69) {
                score = score + 1
            }
            else if (obj.age >= 70 && obj.age <= 79) {
                score = score + 1
            }
        }
        else if (obj.gender == "female") {
            if (obj.age >= 20 && obj.age <= 39) {
                score = score + 9
            }
            else if (obj.age >= 20 && obj.age <= 39) {
                score = score + 7
            }
            else if (obj.age >= 20 && obj.age <= 39) {
                score = score + 4
            }
            else if (obj.age >= 20 && obj.age <= 39) {
                score = score + 2
            }
            else if (obj.age >= 20 && obj.age <= 39) {
                score = score + 1
            }
        }

    }
    else if (obj.smoke == false) {

    }
    console.log(score)

    if (obj.gender == "male") {
        if (obj.age >= 20 && obj.age <= 39) {
            if (obj.TotalCholesterol < 160) {

            }
            else if (obj.TotalCholesterol >= 160 && obj.TotalCholesterol <= 199) {
                score = score + 4
            }
            else if (obj.TotalCholesterol >= 200 && obj.TotalCholesterol <= 239) {
                score = score + 7
            }
            else if (obj.TotalCholesterol >= 240 && obj.TotalCholesterol <= 279) {
                score = score + 9
            }
            else if (obj.TotalCholesterol >= 280) {
                score = score + 11

            }
        }
        else if (obj.age >= 40 && obj.age <= 49) {
            if (obj.TotalCholesterol < 160) {

            }
            else if (obj.TotalCholesterol >= 160 && obj.TotalCholesterol <= 199) {
                score = score + 3
            }
            else if (obj.TotalCholesterol >= 200 && obj.TotalCholesterol <= 239) {
                score = score + 5
            }
            else if (obj.TotalCholesterol >= 240 && obj.TotalCholesterol <= 279) {
                score = score + 6
            }
            else if (obj.TotalCholesterol >= 280) {
                score = score + 8

            }
        }

        else if (obj.age >= 50 && obj.age <= 59) {
            if (obj.TotalCholesterol < 160) {

            }
            else if (obj.TotalCholesterol >= 160 && obj.TotalCholesterol <= 199) {
                score = score + 2
            }
            else if (obj.TotalCholesterol >= 200 && obj.TotalCholesterol <= 239) {
                score = score + 3
            }
            else if (obj.TotalCholesterol >= 240 && obj.TotalCholesterol <= 279) {
                score = score + 4
            }
            else if (obj.TotalCholesterol >= 280) {
                score = score + 5

            }
        }

        else if (obj.age >= 60 && obj.age <= 69) {
            if (obj.TotalCholesterol < 160) {

            }
            else if (obj.TotalCholesterol >= 160 && obj.TotalCholesterol <= 199) {
                score = score + 1
            }
            else if (obj.TotalCholesterol >= 200 && obj.TotalCholesterol <= 239) {
                score = score + 1
            }
            else if (obj.TotalCholesterol >= 240 && obj.TotalCholesterol <= 279) {
                score = score + 2
            }
            else if (obj.TotalCholesterol >= 280) {
                score = score + 3

            }
        }
        else if (obj.age >= 70 && obj.age <= 79) {
            if (obj.TotalCholesterol < 160) {

            }
            else if (obj.TotalCholesterol >= 160 && obj.TotalCholesterol <= 199) {

            }
            else if (obj.TotalCholesterol >= 200 && obj.TotalCholesterol <= 239) {

            }
            else if (obj.TotalCholesterol >= 240 && obj.TotalCholesterol <= 279) {
                score = score + 1
            }
            else if (obj.TotalCholesterol >= 280) {
                score = score + 1

            }
        }


    }

    else if (obj.gender == "female") {
        {
            if (obj.age >= 20 && obj.age <= 39) {
                if (obj.TotalCholesterol < 160) {

                }
                else if (obj.TotalCholesterol >= 160 && obj.TotalCholesterol <= 199) {
                    score = score + 4
                }
                else if (obj.TotalCholesterol >= 200 && obj.TotalCholesterol <= 239) {
                    score = score + 8
                }
                else if (obj.TotalCholesterol >= 240 && obj.TotalCholesterol <= 279) {
                    score = score + 11
                }
                else if (obj.TotalCholesterol >= 280) {
                    score = score + 13

                }
            }
            else if (obj.age >= 40 && obj.age <= 49) {
                if (obj.TotalCholesterol < 160) {

                }
                else if (obj.TotalCholesterol >= 160 && obj.TotalCholesterol <= 199) {
                    score = score + 3
                }
                else if (obj.TotalCholesterol >= 200 && obj.TotalCholesterol <= 239) {
                    score = score + 6
                }
                else if (obj.TotalCholesterol >= 240 && obj.TotalCholesterol <= 279) {
                    score = score + 8
                }
                else if (obj.TotalCholesterol >= 280) {
                    score = score + 10

                }
            }

            else if (obj.age >= 50 && obj.age <= 59) {
                if (obj.TotalCholesterol < 160) {

                }
                else if (obj.TotalCholesterol >= 160 && obj.TotalCholesterol <= 199) {
                    score = score + 2
                }
                else if (obj.TotalCholesterol >= 200 && obj.TotalCholesterol <= 239) {
                    score = score + 4
                }
                else if (obj.TotalCholesterol >= 240 && obj.TotalCholesterol <= 279) {
                    score = score + 5
                }
                else if (obj.TotalCholesterol >= 280) {
                    score = score + 7

                }
            }

            else if (obj.age >= 60 && obj.age <= 69) {
                if (obj.TotalCholesterol < 160) {

                }
                else if (obj.TotalCholesterol >= 160 && obj.TotalCholesterol <= 199) {
                    score = score + 1
                }
                else if (obj.TotalCholesterol >= 200 && obj.TotalCholesterol <= 239) {
                    score = score + 2
                }
                else if (obj.TotalCholesterol >= 240 && obj.TotalCholesterol <= 279) {
                    score = score + 3
                }
                else if (obj.TotalCholesterol >= 280) {
                    score = score + 4

                }
            }
            else if (obj.age >= 70 && obj.age <= 79) {
                if (obj.TotalCholesterol < 160) {

                }
                else if (obj.TotalCholesterol >= 160 && obj.TotalCholesterol <= 199) {
                    score = score + 1
                }
                else if (obj.TotalCholesterol >= 200 && obj.TotalCholesterol <= 239) {
                    score = score + 1
                }
                else if (obj.TotalCholesterol >= 240 && obj.TotalCholesterol <= 279) {
                    score = score + 2
                }
                else if (obj.TotalCholesterol >= 280) {
                    score = score + 2

                }
            }




        }
        console.log(score)

    }
    console.log(score)





    if (obj.gender == "male") {
        if (score < 0) {
            return '罹患機率<1%';
        }
        else if (score >= 0 && score <= 4) {
            return '罹患機率為1%';
        }
        else if (score == 7) {
            return '罹患機率為3%';
        }
        else if (score == 8) {
            return '罹患機率為4%';
        }
        else if (score == 9) {
            return '罹患機率為5%';
        }
        else if (score == 10) {
            return '罹患機率為6%';
        }
        else if (score == 11) {
            return '罹患機率為8%';
        }
        else if (score == 12) {
            return '罹患機率為10%';
        }
        else if (score == 13) {
            return '罹患機率為12%';
        }
        else if (score == 14) {
            return '罹患機率為16%';
        }
        else if (score == 15) {
            return '罹患機率為20%';
        }
        else if (score == 16) {
            return '罹患機率為25%';
        }
        else if (score > 16) {
            return '罹患機率大於30%';
        }
    }
    else if (obj.gender == "female") {
        if (score < 9) {
            return '罹患機率<1%';
        }
        else if (score >= 9 && score <= 12) {
            return '罹患機率為1%';
        }
        else if (score >= 13 && score <= 14) {
            return '罹患機率為2%';
        }
        else if (score == 15) {
            return '罹患機率為3%';
        }
        else if (score == 16) {
            return '罹患機率為4%';
        }
        else if (score == 17) {
            return '罹患機率為5%';
        }
        else if (score == 18) {
            return '罹患機率為6%';
        }
        else if (score == 19) {
            return '罹患機率為8%';
        }
        else if (score == 20) {
            return '罹患機率為11%';
        }
        else if (score == 21) {
            return '罹患機率為14%';
        }
        else if (score == 22) {
            return '罹患機率為17%';
        }
        else if (score == 23) {
            return '罹患機率為22%';
        }
        else if (score == 24) {
            return '罹患機率為27%';
        }
        else if (score > 21) {
            return '罹患機率為30%';
        }
    }
}

function hypertensionadult(obj) {
    let score = 0;
    if (obj.age >= 45 && obj.age <= 54) {

    }
    else if (obj.age >= 55 && obj.age <= 64) {
        score = score + 2
    }
    else if (obj.age >= 65 && obj.age <= 74) {
        score = score + 3
    }
    else if (obj.age >= 75) {
        score = score + 4

    }

    if (obj.gender == 'male') {
    }
    else if (obj.gender == 'female') {
        score = score + 1
    }

    if (obj.smoke == true) {
        score = score + 1
    }
    else if (obj.smoke == false) {
    }

    if (obj.Exercise == true) {
    }
    else if (obj.Exercise == false) {
        score = score + 1
    }

    if (obj.FHOH == true) {
        score = score + 1
    }
    else if (obj.FHOH == false) {
    }

    if (obj.bmi < 25) {
    }
    else if (obj.bmi >= 25 && obj.bmi <= 29) {

        score = score + 1
    }
    else if (obj.bmi >= 30 && obj.bmi <= 39) {
        score = score + 2
    }
    else if (obj.bmi >= 40) {
        score = score + 3
    }


    if (obj.Diabetes == true) {
        score = score + 2
    }
    else if (obj.Diabetes == false) {
    }

    if (obj.SBP < 110) {
    }
    else if (obj.SBP >= 110 && obj.SBP <= 114) {
        score = score + 2
    }
    else if (obj.SBP >= 115 && obj.SBP <= 119) {
        score = score + 3
    }
    else if (obj.SBP >= 120 && obj.SBP <= 124) {
        score = score + 4
    }
    else if (obj.SBP >= 125 && obj.SBP <= 129) {
        score = score + 6
    }
    else if (obj.SBP >= 130 && obj.SBP <= 134) {
        score = score + 8
    }
    else if (obj.SBP >= 135 && obj.SBP <= 139) {
        score = score + 14
    }

    if (obj.age < 55) {
        if (obj.DBP < 70) {
        }
        else if (obj.DBP >= 70 && obj.DBP <= 79) {
            score = score + 2
        }
        else if (obj.DBP >= 80) {
            score = score + 3
        }
    }
    else if (obj.age >= 55 && obj.age <= 64) {
        if (obj.DBP >= 70 && obj.DBP <= 79) {
            score = score - 1
        }
        else if (obj.DBP >= 80) {
            score = score - 1
        }
    }
    else if (obj.age >= 65 && obj.age <= 74) {
        if (obj.DBP >= 70 && obj.DBP <= 79) {
            score = score - 2
        }
        else if (obj.DBP >= 80) {
            score = score - 3
        }
    }
    else if (obj.age >= 75) {
        if (obj.DBP >= 70 && obj.DBP <= 79) {
            score = score - 1
        }
        else if (obj.DBP >= 80) {
            score = score - 2
        }
    }
    console.log(score);
    if (score <= 3) {
        return '罹患機率小於10%'
    }
    else if (score >= 4 && score <= 6) {
        return '罹患機率介於10%-20%之間'
    }
    else if (score == 7) {
        return '罹患機率介於20%-30%之間'
    }
    else if (score == 8) {
        return '罹患機率介於30%-40%之間'
    }
    else if (score >= 9 && score <= 10) {
        return '罹患機率介於40%-50%之間'
    }
    else if (score >= 11 && score <= 12) {
        return '罹患機率介於50%-60%之間'
    }
    else if (score >= 13 && score <= 14) {
        return '罹患機率介於60%-70%之間'
    }
    else if (score >= 15) {
        return '罹患機率高於70%'
    }



}

function livercancer(obj) {
    let score = 0;

    if (obj.gender = "male") {
        score = score + 2
    }
    else if (obj.gender = "female") {

    }

    if (obj.age >= 0 && obj.age <= 34) {
    }
    else if (obj.age >= 35 && obj.age <= 39) {
        score = score + 1
    }
    else if (obj.age >= 40 && obj.age <= 44) {
        score = score + 2
    }
    else if (obj.age >= 45 && obj.age <= 49) {
        score = score + 3
    }
    else if (obj.age >= 50 && obj.age <= 54) {
        score = score + 4
    }
    else if (obj.age >= 55 && obj.age <= 59) {
        score = score + 5
    }
    else if (obj.age >= 60) {
        score = score + 6
    }

    if (obj.SGPT < 15) {
    }
    else if (obj.SGPT >= 15 && obj.SGPT <= 44) {
        score = score + 1
    }
    else if (obj.SGPT >= 45) {
        score = score + 3
    }

    if (obj.Be == true) {
        score = score + 4
    }
    else if (obj.Be == false) {
    }

    if (score <= 4) {
        return '罹患機率低於1%'
    }
    else if (score >= 5 && score <= 9) {
        return '罹患機率1%-10%'
    }
    else if (score >= 10 && score <= 12) {
        return '罹患機率10%-25%'
    }
    else if (score >= 13 && score <= 14) {
        return '罹患機率30%-50%'
    }
    else if (score >= 15) {
        return '罹患機率高於65%'
    }

}

function kidneydisease(obj) {
    if (obj.ACR < 30 || obj.PCR < 150) {
        if (obj.GFR >= 90) {
            return '正常 每年追蹤一次即可'
        }
        else if (obj.GFR >= 60 && obj.GFR <= 89) {
            return '輕度下降 每年追蹤一次即可'
        }
        else if (obj.GFR >= 45 && obj.GFR <= 59) {
            return '輕度中度下降 每年追蹤一次即可'
        }
        else if (obj.GFR >= 30 && obj.GFR <= 44) {
            return '中到中度下降 建議每年追蹤兩次'
        }
        else if (obj.GFR >= 15 && obj.GFR <= 29) {
            return '重度下降 建議每年追蹤三次'
        }
        else if (obj.GFR < 15) {
            return '腎衰竭風險 建議每年追蹤四次或以上'
        }

    }
    else if ((obj.ACR >= 30 && obj.ACR <= 300) || (obj.PCR >= 150 && obj.PCR <= 500)) {
        if (obj.GFR >= 90) {
            return '正常 每年追蹤一次即可'
        }
        else if (obj.GFR >= 60 && obj.GFR <= 89) {
            return '輕度下降 每年追蹤一次即可'
        }
        else if (obj.GFR >= 45 && obj.GFR <= 59) {
            return '輕度中度下降 建議每年追蹤兩次'
        }
        else if (obj.GFR >= 30 && obj.GFR <= 44) {
            return '中到中度下降 建議每年追蹤三次'
        }
        else if (obj.GFR >= 15 && obj.GFR <= 29) {
            return '重度下降 建議每年追蹤三次'
        }
        else if (obj.GFR < 15) {
            return '腎衰竭風險 建議每年追蹤四次或以上'
        }

    }
    else if (obj.ACR > 300 || obj.PCR > 500) {
        if (obj.GFR >= 90) {
            return '正常 但建議每年追蹤兩次'
        }
        else if (obj.GFR >= 60 && obj.GFR <= 89) {
            return '輕度下降 建議每年追蹤兩次'
        }
        else if (obj.GFR >= 45 && obj.GFR <= 59) {
            return '輕度中度下降 建議每年追蹤三次'
        }
        else if (obj.GFR >= 30 && obj.GFR <= 44) {
            return '中到中度下降 建議每年追蹤三次'
        }
        else if (obj.GFR >= 15 && obj.GFR <= 29) {
            return '重度下降 建議每年追蹤四次或以上'
        }
        else if (obj.GFR < 15) {
            return '腎衰竭風險 建議每年追蹤四次或以上'
        }

    }

}

function Diabetes(obj) {
    var score = 0
    if (obj.gender == 'male') {
    }
    else if (obj.gender == 'female') {
    }
    if (obj.age < 45) {
    }
    else if (obj.age >= 45 && obj.age <= 54) {
        score = score + 2
    }
    else if (obj.age >= 55 && obj.age <= 64) {
        score = score + 3
    }
    else if (obj.age > 64) {
        score = score + 4
    }

    if (obj.bmi < 25) {
    }
    else if (obj.bmi >= 25 && obj.bmi <= 30) {
        score = score + 1
    }
    else if (obj.bmi > 30) {
        score = score + 3
    }

    if (obj.bpm == true) {
        score = score + 2
    }
    else if (obj.bpm == false) {
    }

    if (obj.Hhbg == true) {
        score = score + 5
    }
    else if (obj.Hhbg == false) {
    }

    if (obj.pa == true) {
    }
    else if (obj.pa == false) {
        score = score + 2
    }

    if (obj.dcvfb == true) {
    }
    else if (obj.dcvfb == false) {
        score = score + 1
    }
    if (obj.FHOD == true) {
        if (obj.firstdegree) {
            score = score + 5
        }
        else if (obj.seconddegree) {
            score = score + 3
        }
    }
    else if (obj.FHOD == false) {
    }
    console.log(score);
    if (obj.gender == 'male') {
        if (score >= 0 && score <= 3) {
            return '罹患機率0.3%'
        }
        else if (score >= 4 && score <= 8) {
            return '罹患機率0.8%'
        }
        else if (score >= 9 && score <= 12) {
            return '罹患機率2.6%'
        }
        else if (score >= 13 && score <= 20) {
            return '罹患機率23.1%'
        }
        else if (score >= 21) {
            return '罹患機率50%'
        }

    }
    else if (obj.gender == 'female') {
        if (score >= 0 && score <= 3) {
            return '罹患機率0.1%'
        }
        else if (score >= 4 && score <= 8) {
            return '罹患機率0.4%'
        }
        else if (score >= 9 && score <= 12) {
            return '罹患機率2.2%'
        }
        else if (score >= 13 && score <= 20) {
            return '罹患機率14.1%'
        }
        else if (score >= 21) {
            return '罹患機率50%'
        }

    }
}

function formerSmoker(obj) {
    let OR = 0;
    if (obj.intercept == true) {
        OR = OR + 1
    }
    else if (obj.intercept == false) {
        OR = OR + 1
    }

    if (obj.emphysema == true) {
        OR = OR + 2.65;
    }
    else if (obj.emphysema == false) {
        OR = OR + 1;
    }

    if (obj.dustExposure == true) {
        OR = OR + 1.59;
    }
    else if (obj.dustExposure == false) {
        OR = OR + 1;
    }

    if (obj.familyHistory >= 2) {
        OR = OR + 1.59;
    }
    else if (obj.familyHistory < 2) {
        OR = OR + 1;
    }

    if (obj.stopSmokingA < 42) {
        OR = OR + 1
    }
    else if (obj.stopSmokingA >= 54) {
        OR = OR + 1.5;
    }
    else {
        OR = OR + 1;
    }

    if (obj.hayfever == true) {
        OR = OR + 1
    }
    else if (obj.hayfever == false) {
        OR = OR + 1.45
    }

    console.log(OR);
    if (OR < 5.9) {
        return '罹患機率微小'
    }
    else if (OR >= 5.9 && OR <= 6.9) {
        return '罹患機率略高'
    }
    else if (OR >= 7) {
        return '罹患機率偏高'
    }

}

function currentSmoker(obj) {
    let OR = 0;
    if (obj.intercept == true) {
        OR = OR + 1
    }
    else if (obj.intercept == false) {
        OR = OR + 1
    }

    if (obj.emphysema == true) {
        OR = OR + 2.13;
    }
    else if (obj.emphysema == false) {
        OR = OR + 1
    }

    if (obj.packYears < 28) {
        OR = OR + 1
    }
    else if (obj.packYears <= 41.9) {
        OR = OR + 1
    }
    else if (obj.packYears <= 57.4) {
        OR = OR + 1.45
    }
    else {
        OR = OR + 1.85
    }

    if (obj.dustExposure == true) {
        OR = OR + 1.36
    }
    else {
        OR = OR + 1
    }

    if (obj.asbestosExposure == true) {
        OR = OR + 1.51;
    }
    else if (obj.asbestosExposure == false) {
        OR = OR + 1;
    }

    if (obj.familyHistory == 0) {
        OR = OR + 1
    }
    else if (obj.familyHistory >= 1) {
        OR = OR + 1.47
    }

    if (obj.hayfever == true) {
        OR = OR + 1
    }
    else if (obj.hayfever == false) {
        OR = OR + 1.49
    }
    if (OR < 6.9) {
        return '罹患機率微小'
    }
    else if (OR >= 6.9 && OR <= 7.9) {
        return '罹患機率略高'
    }
    else if (OR >= 8 ) {
        return '罹患機率偏高'
    }
}









//讀取頁面前抓資料庫
async function beforeVTE() {
    //call firebase Data
    const uid = 'testUid';
    let dataRef = firebase.database().ref('testBank').child(uid);
    let snapshot = await dataRef.once('value');
    let userData = snapshot.val();
    console.log(userData);

    if (userData) {
        //第一個因子
        let cancer = document.getElementsByName("cancer");
        if (userData.cancer == true) {
            cancer[0].checked = true;
        }
        else if (userData.cancer == false) {
            cancer[1].checked = true;
        }
        //第二個因子
        let VTE = document.getElementsByName("VTE");
        if (userData.VTE == true) {
            VTE[0].checked = true;
        }
        else if (userData.cancer == false) {
            VTE[1].checked = true;
        }
        //第三個因子
        let move = document.getElementsByName("move");
        if (userData.move == true) {
            move[0].checked = true;
        }
        else if (userData.cancer == false) {
            move[1].checked = true;
        }
        //第四個因子
        let TC = document.getElementsByName("TC");
        if (userData.TC == true) {
            TC[0].checked = true;
        }
        else if (userData.cancer == false) {
            TC[1].checked = true;
        }
        //第五個因子
        let surgery = document.getElementsByName("surgery");
        if (userData.surgery == true) {
            surgery[0].checked = true;
        }
        else if (userData.cancer == false) {
            surgery[1].checked = true;
        }
        //第六個因子
        let age = document.getElementsByName("age");

        if (userData.birth) {
            let birth = new Date(userData.birth)
            let date = new Date();
            let temp = date.getFullYear() - birth.getFullYear();
            age[0].value = temp;
        }

        //第七個因子
        let breath = document.getElementsByName("breath");
        if (userData.breath == true) {
            breath[0].checked = true;
        }
        else if (userData.cancer == false) {
            breath[1].checked = true;
        }
        //第八個因子
        let heart = document.getElementsByName("heart");
        if (userData.heart == true) {
            heart[0].checked = true;
        }
        else if (userData.cancer == false) {
            heart[1].checked = true;
        }
        //第九個因子
        let infect = document.getElementsByName("infect");
        if (userData.infect == true) {
            infect[0].checked = true;
        }
        else if (userData.cancer == false) {
            infect[1].checked = true;
        }
        //第十個因子
        let hight = document.getElementsByName("hight");
        if (userData.hight) {
            hight[0].value = userData.hight;
        }
        //第十一個因子
        let weight = document.getElementsByName("weight");
        if (userData.weight) {
            weight[0].value = userData.weight;
        }
    }
}

async function beforeCor() {
    //call firebase Data
    const uid = 'testUid';
    let dataRef = firebase.database().ref('testBank').child(uid);
    let snapshot = await dataRef.once('value');
    let userData = snapshot.val();
    console.log(userData);


    if (userData) {
        //第一個因子
        let age = document.getElementsByName("age");

        if (userData.birth) {
            let birth = new Date(userData.birth)
            let date = new Date();
            let temp = date.getFullYear() - birth.getFullYear();
            age[0].value = temp;
        }

        //第二個因子
        let SBP = document.getElementsByName("SBP");
        if (userData.SBP) {
            SBP[0].value = userData.SBP;
        }
        //第三個因子
        let HDL = document.getElementsByName("HDL");
        if (userData.HDL) {
            HDL[0].value = userData.HDL;
        }
        //第四個因子
        let gender = document.getElementsByName("gender");
        if (userData.gender == true) {
            gender[0].checked = true;
        }
        else if (userData.gender == false) {
            gender[1].checked = true;
        }
        //第五個因子
        let smoke = document.getElementsByName("smoke");
        if (userData.smoke == true) {
            smoke[0].checked = true;
        }
        else if (userData.smoke == false) {
            smoke[1].checked = true;
        }
        //第六個因子
        let TotalCholesterol = document.getElementsByName("TotalCholesterol");
        if (userData.TotalCholesterol) {
            TotalCholesterol[0].value = userData.TotalCholesterol;
        }

    }
}

async function beforehyper() {
    //call firebase Data
    const uid = 'testUid';
    let dataRef = firebase.database().ref('testBank').child(uid);
    let snapshot = await dataRef.once('value');
    let userData = snapshot.val();
    console.log(userData);

    if (userData) {
        //第一個因子
        let age = document.getElementsByName("age");
        if (userData.birth) {
            let birth = new Date(userData.birth)
            let date = new Date();
            let temp = date.getFullYear() - birth.getFullYear();
            age[0].value = temp;
        }
        //第二個因子
        let gender = document.getElementsByName("gender");
        if (userData.gender == true) {
            gender[0].checked = true;
        }
        else if (userData.gender == false) {
            gender[1].checked = true;
        }
        //第三個因子
        let smoke = document.getElementsByName("smoke");
        if (userData.smoke == true) {
            smoke[0].checked = true;
        }
        else if (userData.smoke == false) {
            smoke[1].checked = true;
        }
        //第四個因子
        let Exercise = document.getElementsByName("Exercise");
        if (userData.Exercise == true) {
            Exercise[0].checked = true;
        }
        else if (userData.Exercise == false) {
            Exercise[1].checked = true;
        }
        //第五個因子
        let FHOH = document.getElementsByName("FHOH");
        if (userData.FHOH == true) {
            FHOH[0].checked = true;
        }
        else if (userData.FHOH == false) {
            FHOH[1].checked = true;
        }
        //第六個因子
        let BMI = document.getElementsByName("BMI");
        if (userData.BMI) {
            BMI[0].value = userData.BMI;
        }
        //第七個因子
        let Diabetes = document.getElementsByName("Diabetes");
        if (userData.Diabetes == true) {
            Diabetes[0].checked = true;
        }
        else if (userData.Diabetes == false) {
            Diabetes[1].checked = true;
        }
        //第八個因子
        let SBP = document.getElementsByName("SBP");
        if (userData.SBP) {
            SBP[0].value = userData.SBP;
        }
        //第九個因子
        let DBP = document.getElementsByName("DBP");
        if (userData.DBP) {
            DBP[0].value = userData.DBP;
        }
        //第十個因子
        let hight = document.getElementsByName("hight");
        if (userData.hight) {
            hight[0].value = userData.hight;
        }
        //第十一個因子
        let weight = document.getElementsByName("weight");
        if (userData.weight) {
            weight[0].value = userData.weight;
        }
    }
}

async function beforelivercancer() {
    //call firebase Data
    const uid = 'testUid';
    let dataRef = firebase.database().ref('testBank').child(uid);
    let snapshot = await dataRef.once('value');
    let userData = snapshot.val();
    console.log(userData);

    if (userData) {
        //第一個因子
        let gender = document.getElementsByName("gender");
        if (userData.gender == true) {
            gender[0].checked = true;
        }
        else if (userData.gender == false) {
            gender[1].checked = true;
        }
        //第二個因子
        let age = document.getElementsByName("age");
        if (userData.birth) {
            let birth = new Date(userData.birth)
            let date = new Date();
            let temp = date.getFullYear() - birth.getFullYear();
            age[0].value = temp;
        }
        //第三個因子
        let SGPT = document.getElementsByName("SGPT");
        if (userData.SGPT) {
            SGPT[0].value = userData.SGPT;
        }
        //第四個因子
        let Be = document.getElementsByName("Be");
        if (userData.Be == true) {
            Be[0].checked = true;
        }
        else if (userData.Be == false) {
            Be[1].checked = true;
        }

    }
}

async function beforeDiabetes() {
    //call firebase Data
    const uid = 'testUid';
    let dataRef = firebase.database().ref('testBank').child(uid);
    let snapshot = await dataRef.once('value');
    let userData = snapshot.val();
    console.log(userData);

    if (userData) {
        //第一個因子
        let gender = document.getElementsByName("gender");
        if (userData.gender == true) {
            gender[0].checked = true;
        }
        else if (userData.gender == false) {
            gender[1].checked = true;
        }
        //第二個因子
        let age = document.getElementsByName("age");
        if (userData.birth) {
            let birth = new Date(userData.birth)
            let date = new Date();
            let temp = date.getFullYear() - birth.getFullYear();
            age[0].value = temp;
        }
        //第三個因子
        let bmi = document.getElementsByName("bmi");
        if (userData.bmi) {
            bmi[0].value = userData.bmi;
        }
        //第四個因子
        let bpm = document.getElementsByName("bpm");
        if (userData.bpm == true) {
            bpm[0].checked = true;
        }
        else if (userData.bpm == false) {
            bpm[1].checked = true;
        }
        //第五個因子
        let Hhbg = document.getElementsByName("Hhbg");
        if (userData.Hhbg == true) {
            Hhbg[0].checked = true;
        }
        else if (userData.Hhbg == false) {
            Hhbg[1].checked = true;
        }
        //第六個因子
        let pa = document.getElementsByName("pa");
        if (userData.pa == true) {
            pa[0].checked = true;
        }
        else if (userData.pa == false) {
            pa[1].checked = true;
        }
        //第七個因子
        let dcvfb = document.getElementsByName("dcvfb");
        if (userData.dcvfb == true) {
            dcvfb[0].checked = true;
        }
        else if (userData.dcvfb == false) {
            dcvfb[1].checked = true;
        }
        //第八個因子
        let FHOD = document.getElementsByName("FHOD");
        if (userData.FHOD == true) {
            FHOD[0].checked = true;
        }
        else if (userData.FHOD == false) {
            FHOD[1].checked = true;
        }
        //第九個因子
        let degree = document.getElementsByName("degree");
        if (userData.firstdegree == true) {
            degree[0].checked = true;
        }
        if (userData.seconddegree == true) {
            degree[1].checked = true;
        }
        //第十個因子
        let hight = document.getElementsByName("hight");
        if (userData.hight) {
            hight[0].value = userData.hight;
        }
        //第十一個因子
        let weight = document.getElementsByName("weight");
        if (userData.weight) {
            weight[0].value = userData.weight;
        }
    }
}

async function beforekidneydisease() {
    //call firebase Data
    const uid = 'testUid';
    let dataRef = firebase.database().ref('testBank').child(uid);
    let snapshot = await dataRef.once('value');
    let userData = snapshot.val();
    console.log(userData);

    if (userData) {

        //第一個因子
        let PCR = document.getElementsByName("PCR");
        if (userData.PCR) {
            PCR[0].value = userData.PCR;
        }
        //第二個因子
        let ACR = document.getElementsByName("ACR");
        if (userData.ACR) {
            ACR[0].value = userData.ACR;
        }
        //第三個因子
        let GFR = document.getElementsByName("GFR");
        if (userData.GFR) {
            GFR[0].value = userData.GFR;
        }
        //第四個因子
        let AAA = document.getElementsByName("AAA");
        if (userData.AAA) {
            AAA[0].value = userData.AAA;
        }
    }
}



