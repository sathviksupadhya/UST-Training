package com.authentication.Authentication_micro.config;

import com.authentication.Authentication_micro.Service.CustomUserDetailsService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;

import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
public class AuthConfig {
    @Bean
    public UserDetailsService userDetailsService(){
        return new CustomUserDetailsService();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf->csrf.disable())
                .authorizeHttpRequests(auth->auth.anyRequest().permitAll())
                .headers((headers)->headers.frameOptions((frame)->frame.sameOrigin()));
        return http.build();  // Creates and returns the configured SecurityFilterChain.
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(); // Use BCrypt for password hashing.
    }
    @Bean
    public AuthenticationManager authenticatioManager(AuthenticationConfiguration config) throws Exception{
        return config.getAuthenticationManager();
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authenticationProvider= new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;  // Creates and returns the configured AuthenticationProvider.  // Configure the DaoAuthenticationProvider to use our custom UserDetailsService and PasswordEncoder.  // This provider will be used for authentication.  // Note: The DaoAuthenticationProvider uses a default authentication success handler, which can be customized.  // The default authentication success handler redirects to a success page.  // If you want to customize the success handler, you can create a custom one and configure it here.  // The
    }

//    @Autowired
//    JwtAuthFilter jwtAuthFilter;
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        return http.csrf(csrf -> csrf.disable())
//                .authorizeHttpRequests(auth -> auth.requestMatchers("/swagger-ui/**","/api/authors/**","/api/validate")
//                        .permitAll()
//                        .anyRequest()
//                        .authenticated())
//                .formLogin(Customizer.withDefaults())
//                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
//                .build();
//    }


}
