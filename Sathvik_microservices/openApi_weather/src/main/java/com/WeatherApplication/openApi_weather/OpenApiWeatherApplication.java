package com.WeatherApplication.openApi_weather;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class OpenApiWeatherApplication {

	public static void main(String[] args) {
		SpringApplication.run(OpenApiWeatherApplication.class, args);
	}
	//@Bean
	//public RestTemplate restTemplate() {
	//	return new RestTemplate();


	}
//}
