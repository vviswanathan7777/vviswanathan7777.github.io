function remove_cookie() {
    var cookie_alert_object = document.querySelector(".container_cookie_time");
    cookie_alert_object.remove();
}

function convert(scale, raw_temperature_string) {
    var temperature_string = raw_temperature_string.slice(0,-1);
    var temperature = Number(temperature_string);
    var converted;

    if (F_or_C_and_degree_symbol[0] == "F") {
        converted = (temperature * 9 / 5) + 32;
        integer_converted = Math.round(converted);
        string_converted = integer_converted.toString() + F_or_C_and_degree_symbol[1];
        return string_converted;
    }
    if (F_or_C_and_degree_symbol[0] == "C") {
        converted = (temperature - 32) * 5 / 9;
        integer_converted = Math.round(converted);
        string_converted = integer_converted.toString() + F_or_C_and_degree_symbol[1];
        return string_converted;
    }
}

function change_temperature_scale(element) {
    var string_with_degree_symbol = element.innerText;
    var celsius_or_farenheit = document.querySelector("#celsius_or_farenheit");
    var F_or_C = celsius_or_farenheit.value;
    F_or_C_and_degree_symbol = F_or_C.toString() + string_with_degree_symbol[0];

    var first_column_high_temperature = document.querySelector(".container_column_ONE_of_main_content .high_for_the_day");
    var first_column_low_temperature = document.querySelector(".container_column_ONE_of_main_content .low_for_the_day");
    var second_column_high_temperature = document.querySelector(".container_column_TWO_of_main_content .high_for_the_day");
    var second_column_low_temperature = document.querySelector(".container_column_TWO_of_main_content .low_for_the_day");
    var third_column_high_temperature = document.querySelector(".container_column_THREE_of_main_content .high_for_the_day");
    var third_column_low_temperature = document.querySelector(".container_column_THREE_of_main_content .low_for_the_day");
    var fourth_column_high_temperature = document.querySelector(".container_column_FOUR_of_main_content .high_for_the_day");
    var fourth_column_low_temperature = document.querySelector(".container_column_FOUR_of_main_content .low_for_the_day");

    first_column_high_temperature.innerText = convert(F_or_C_and_degree_symbol, first_column_high_temperature.innerText);
    first_column_low_temperature.innerText = convert(F_or_C_and_degree_symbol, first_column_low_temperature.innerText);
    second_column_high_temperature.innerText = convert(F_or_C_and_degree_symbol, second_column_high_temperature.innerText);
    second_column_low_temperature.innerText = convert(F_or_C_and_degree_symbol, second_column_low_temperature.innerText);
    third_column_high_temperature.innerText = convert(F_or_C_and_degree_symbol, third_column_high_temperature.innerText);
    third_column_low_temperature.innerText = convert(F_or_C_and_degree_symbol, third_column_low_temperature.innerText);
    fourth_column_high_temperature.innerText = convert(F_or_C_and_degree_symbol, fourth_column_high_temperature.innerText);
    fourth_column_low_temperature.innerText = convert(F_or_C_and_degree_symbol, fourth_column_low_temperature.innerText);

}