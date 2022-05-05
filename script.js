//　値の定義ここから
const names = [];
var searchResult = [];
var sampleResult = [];
const namebox = document.getElementById('name');
var name = namebox.value;
const weightbox = document.getElementById('weight');
const weight = weightbox.value;
var row = 1; // これは検索する食材の個数に対応している
for (i = 0; i < data.length; i++) {
    names[i] = data[i].name;
}
// 値の定義ここまで


function inputCheck() {
    if (namebox.value == "") {
        $('.suggest_list').css("display", "none");
    } else {
        $('.suggest_list').css("display", "block");
        if (names.includes(namebox.value)) {
            console.log()
        }
    };
};

function startSuggest() {
    new Suggest.Local(
        "name",    // 入力のエレメントID
        "suggest", // 補完候補を表示するエリアのID
        names,      // 補完候補の検索対象となる配列
        { dispMax: 50, interval: 1000 }); // オプション
}
window.addEventListener ?
window.addEventListener('load', startSuggest, false) :
window.attachEvent('onload', startSuggest);

function calculation() {
    const m = weightbox.value / 100;
    var num = names.indexOf(namebox.value);
    var result = data[num];
    var energy_s = result.energy * m;
    var protein_s = result.protein * m;
    var fat_s = result.fat * m;
    var dietary_fiber_s = result.dietary_fiber * m;
    var carbohydrate_s = result.carbohydrate * m;
    var salt_s = result.salt * m;
    var na_s = result.na * m;
    var k_s = result.k * m;
    var ca_s = result.ca * m;
    var mg_s = result.mg * m;
    var p_s = result.p * m;
    var fe_s = result.fe * m;
    var retinol_s = result.retinol * m;
    var vitamin_d_s = result.vitamin_d * m;
    var alpha_tocopherol_s = result.alpha_tocopherol * m;
    var vitamin_k_s = result.vitamin_k * m;
    var vitamin_b1_s = result.vitamin_b1 * m;
    var vitamin_b2_s = result.vitamin_b2 * m;
    var vitamin_b12_s = result.vitamin_b12 * m;
    var folic_acid_s = result.folic_acid * m;
    var vitamin_c_s = result.vitamin_c * m;

    document.getElementsByClassName('energy_result')[0].innerHTML = energy_s;
    document.getElementsByClassName('protein_result')[0].innerHTML = protein_s;
    document.getElementsByClassName('fat_result')[0].innerHTML = fat_s;
    document.getElementsByClassName('dietary_fiber_result')[0].innerHTML = dietary_fiber_s;
    document.getElementsByClassName('carbohydrate_result')[0].innerHTML = carbohydrate_s;
    document.getElementsByClassName('salt_result')[0].innerHTML = salt_s;
    document.getElementsByClassName('na_result')[0].innerHTML = na_s;
    document.getElementsByClassName('k_result')[0].innerHTML = k_s;
    document.getElementsByClassName('ca_result')[0].innerHTML = ca_s;
    document.getElementsByClassName('mg_result')[0].innerHTML = mg_s;
    document.getElementsByClassName('p_result')[0].innerHTML = p_s;
    document.getElementsByClassName('fe_result')[0].innerHTML = fe_s;
    document.getElementsByClassName('retinol_result')[0].innerHTML = retinol_s;
    document.getElementsByClassName('vitamin_d_result')[0].innerHTML = vitamin_d_s;
    document.getElementsByClassName('alpha_tocopherol_result')[0].innerHTML = alpha_tocopherol_s;
    document.getElementsByClassName('vitamin_k_result')[0].innerHTML = vitamin_k_s;
    document.getElementsByClassName('vitamin_b1_result')[0].innerHTML = vitamin_b1_s;
    document.getElementsByClassName('vitamin_b2_result')[0].innerHTML = vitamin_b2_s;
    document.getElementsByClassName('vitamin_b12_result')[0].innerHTML = vitamin_b12_s;
    document.getElementsByClassName('folic_acid_result')[0].innerHTML = folic_acid_s;
    document.getElementsByClassName('vitamin_c_result')[0].innerHTML = vitamin_c_s;
}

const search = () => {
    if (names.indexOf(namebox.value) > -1) {
        if (!isNaN(weightbox.value)) {
            calculation(); 
        } else {
            alert("数値以外が入力されています");
        }
    } else {
        console.log(name)
        alert('該当する食品が存在しません。');
    }
}