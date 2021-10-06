const convertFunction = (value,option,selectConvert) => {
    if(option == 'm'){
        switch (option == 'm') {
            case selectConvert == 'Tm':
                return value * 0.000000000001;
                break;
            case selectConvert == 'Gm':
                return value * 0.000000001;
                break;
            case selectConvert == 'Mm':
                return value * 0.000001;
                break;
            case selectConvert == 'Km':
                return value * 0.001;
                break;
            case selectConvert == 'hm':
                return value * 0.01;
                break;
            case selectConvert == 'dam':
                return value * 0.1;
                break;
            case selectConvert == 'm':
                return value * 1;
                break;
            case selectConvert == 'dm':
                return value * 10;
                break;
            case selectConvert == 'cm':
                return value * 100;
                break;
            case selectConvert == 'mm':
                return value * 1000;
                break;
            case selectConvert == 'μm':
                return value * 1000000;
                break;
            case selectConvert == 'nm':
                return value * 1000000000;
                break;
            case selectConvert == 'pm':
                return value * 1000000000000;
                break;
            default:
            return "Select Option First";
        }
    }
    else if(option == 'dm'){
        switch (option == 'dm') {
            case selectConvert == 'Tm':
                return value * 0.0000000000001;
                break;
            case selectConvert == 'Gm':
                return value * 0.0000000001;
                break;
            case selectConvert == 'Mm':
                return value * 0.0000001;
                break;
            case selectConvert == 'Km':
                return value * 0.0001;
                break;
            case selectConvert == 'hm':
                return value * 0.001;
                break;
            case selectConvert == 'dam':
                return value * 0.01;
                break;
            case selectConvert == 'm':
                return value * 0.1;
                break;
            case selectConvert == 'dm':
                return value * 1;
                break;
            case selectConvert == 'cm':
                return value * 10;
                break;
            case selectConvert == 'mm':
                return value * 100;
                break;
            case selectConvert == 'μm':
                return value * 100000;
                break;
            case selectConvert == 'nm':
                return value * 100000000;
                break;
            case selectConvert == 'pm':
                return value * 100000000000;
                break;
            default:
            return "Select Option First";
        }
    }
    else if(option == 'cm'){
        switch (option == 'cm') {
            case selectConvert == 'Tm':
                return value * 0.00000000000001;
                break;
            case selectConvert == 'Gm':
                return value * 0.00000000001;
                break;
            case selectConvert == 'Mm':
                return value * 0.00000001;
                break;
            case selectConvert == 'Km':
                return value * 0.00001;
                break;
            case selectConvert == 'hm':
                return value * 0.0001;
                break;
            case selectConvert == 'dam':
                return value * 0.001;
                break;
            case selectConvert == 'm':
                return value * 0.01;
                break;
            case selectConvert == 'dm':
                return value * 0.1;
                break;
            case selectConvert == 'cm':
                return value * 1;
                break;
            case selectConvert == 'mm':
                return value * 10;
                break;
            case selectConvert == 'μm':
                return value * 10000;
                break;
            case selectConvert == 'nm':
                return value * 10000000;
                break;
            case selectConvert == 'pm':
                return value * 10000000000;
                break;
            default:
            return "Select Option First";
        }
    }
    else if(option == 'mm'){
        switch (option == 'mm') {
            case selectConvert == 'Tm':
                return value * 0.000000000000001;
                break;
            case selectConvert == 'Gm':
                return value * 0.000000000001;
                break;
            case selectConvert == 'Mm':
                return value * 0.000000001;
                break;
            case selectConvert == 'Km':
                return value * 0.000001;
                break;
            case selectConvert == 'hm':
                return value * 0.00001;
                break;
            case selectConvert == 'dam':
                return value * 0.0001;
                break;
            case selectConvert == 'm':
                return value * 0.001;
                break;
            case selectConvert == 'dm':
                return value * 0.01;
                break;
            case selectConvert == 'cm':
                return value * 0.1;
                break;
            case selectConvert == 'mm':
                return value * 1;
                break;
            case selectConvert == 'μm':
                return value * 1000;
                break;
            case selectConvert == 'nm':
                return value * 1000000;
                break;
            case selectConvert == 'pm':
                return value * 1000000000;
                break;
            default:
            return "Select Option First";
        }
    }
    else if(option == 'μm'){
        switch (option == 'μm') {
            case selectConvert == 'Tm':
                return value * 0.000000000000001;
                break;
            case selectConvert == 'Gm':
                return value * 0.000000000001;
                break;
            case selectConvert == 'Mm':
                return value * 0.000000001;
                break;
            case selectConvert == 'Km':
                return value * 0.000001;
                break;
            case selectConvert == 'hm':
                return value * 0.00001;
                break;
            case selectConvert == 'dam':
                return value * 0.0001;
                break;
            case selectConvert == 'm':
                return value * 0.001;
                break;
            case selectConvert == 'dm':
                return value * 0.01;
                break;
            case selectConvert == 'cm':
                return value * 0.000001;
                break;
            case selectConvert == 'mm':
                return value * 0.001;
                break;
            case selectConvert == 'μm':
                return value * 1;
                break;
            case selectConvert == 'nm':
                return value * 1000;
                break;
            case selectConvert == 'pm':
                return value * 1000000;
                break;
            default:
            return "Select Option First";
        }
    }
}
document.getElementById("btn-convert").onclick = () => {
    let value = document.getElementById("input-value").value;
    let option = document.getElementById("select-option").value;
    let selectConvert = document.getElementById("select-convert").value;
    document.getElementById("input-convert").value = convertFunction(value,option,selectConvert);
};