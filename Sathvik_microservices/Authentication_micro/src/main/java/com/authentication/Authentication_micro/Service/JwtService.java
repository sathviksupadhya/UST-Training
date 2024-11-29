package com.authentication.Authentication_micro.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {
    public static final String SECRET ="0cb0a134f23b3a89debefb840cd526386506c76f5f43fe3ab3deec09da32801705305c14d2db6818caf903e81c9085e148131e6c8898ce05118509e36ceb43673bd7f309a88d7f9435119c633e3cbcc3640ce52e37f6bc1627e601d17e0b796000d8dcba43297463923a90db82e3b17220af821528f534964f4c39db23e1228231bad7e95e452005beae8888ed09e246667431028a71b914047405043b0171470c954abd165b3ae9b51671e52c12ca461acc484b9133acf3086b56fd0a0ba13cac4406768610005d7f71ec9db92482e8a937636d2beb0f2cd8baac8c903ca43cddaf080ca8354911b70a2d93b7883146aca4a62e5ba4c857726eb0f83b08b001";

    public String generateToken(String username) {
        Map<String,Object> claims = new HashMap<>();
        return createToken(claims, username);
    }
//    public String generateToken(Map<String,Object> claims, String username) {
//        return createToken(claims, username);
//    }
    public void validateToken(String token){
        Jwts.parserBuilder()
               .setSigningKey(getSignkey())
               .build()
               .parseClaimsJws(token);

    }

    private String createToken(Map<String, Object> claims, String username) {
        return Jwts.builder()
                .setClaims(claims)  // Set claims
                .setSubject(username) // Set subject (username)
                .setIssuedAt(new Date(System.currentTimeMillis())) // Set issue date
                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*30)) // Set expiration date
                .signWith(getSignkey(), SignatureAlgorithm.HS256) // Sign with the secret key
                .compact(); // Compact to a JWT string
    }
    private Key getSignkey() {
        byte[] keybytes = Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keybytes);
    }
    //extract user name
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignkey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

}
