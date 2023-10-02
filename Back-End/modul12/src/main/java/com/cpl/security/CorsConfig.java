package com.cpl.security;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class CorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000")); // Menentukan daftar origin yang diizinkan
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE")); // Menentukan metode yang diizinkan

        configuration.setAllowedHeaders(Arrays.asList("*"));  // Menentukan header yang diizinkan
        configuration.setAllowCredentials(true);    // Mengizinkan kredensial otentikasi

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // Mengaplikasikan konfigurasi ke semua URL

        return source;
    }

}
