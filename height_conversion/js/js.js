const convertFunction = (value,option,selectConvert) => {
    if(option == 'm'){
        switch (option == 'm') {
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
            default:
            return "Select Option First";
        }
    }
    else if(option == 'dm'){
        switch (option == 'dm') {
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
            default:
            return "Select Option First";
        }
    }
    else if(option == 'cm'){
        switch (option == 'cm') {
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
            default:
            return "Select Option First";
        }
    }
    else if(option == 'mm'){
        switch (option == 'mm') {
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
            default:
            return "Select Option First";
        }
    }
    else if(option == 'dam'){
        switch (option == 'dam') {
            case selectConvert == 'Km':
                return value * 0.01;
                break;
            case selectConvert == 'hm':
                return value * 0.1;
                break;
            case selectConvert == 'dam':
                return value * 1;
                break;
            case selectConvert == 'm':
                return value * 10;
                break;
            case selectConvert == 'dm':
                return value * 100;
                break;
            case selectConvert == 'cm':
                return value * 1000;
                break;
            case selectConvert == 'mm':
                return value * 10000;
                break;
            default:
            return "Select Option First";
        }
    }
    else if(option == 'hm'){
        switch (option == 'hm') {
            case selectConvert == 'Km':
                return value * 0.1;
                break;
            case selectConvert == 'hm':
                return value * 1;
                break;
            case selectConvert == 'dam':
                return value * 10;
                break;
            case selectConvert == 'm':
                return value * 100;
                break;
            case selectConvert == 'dm':
                return value * 1000;
                break;
            case selectConvert == 'cm':
                return value * 10000;
                break;
            case selectConvert == 'mm':
                return value * 100000;
                break;
            default:
            return "Select Option First";
        }
    }
    else if(option == 'Km'){
        switch (option == 'Km') {
            case selectConvert == 'Km':
                return value * 1;
                break;
            case selectConvert == 'hm':
                return value * 10;
                break;
            case selectConvert == 'dam':
                return value * 100;
                break;
            case selectConvert == 'm':
                return value * 1000;
                break;
            case selectConvert == 'dm':
                return value * 10000;
                break;
            case selectConvert == 'cm':
                return value * 100000;
                break;
            case selectConvert == 'mm':
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