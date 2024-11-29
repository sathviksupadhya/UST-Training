package com.WeatherApplication.openApi_weather;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import org.springframework.beans.factory.annotation.Value;

@Service
public class WeatherService {

    private final String API_KEY = "38786454394f48ecf3a2859d8599e73e";
    private final String API_URL = "http://api.openweathermap.org/data/2.5/weather";
//    private final RestTemplate restTemplate;

    public String getWeather(String city) {
        RestTemplate restTemplate = new RestTemplate();
        String url = String.format("%s?q=%s&appid=%s&units=metric", API_URL, city, API_KEY);
        return restTemplate.getForObject(url,String.class);
    }}



