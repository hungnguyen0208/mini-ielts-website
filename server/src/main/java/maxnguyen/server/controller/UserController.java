package maxnguyen.server.controller;

import maxnguyen.server.dto.LoginRequest;
import maxnguyen.server.dto.UserRequest;
import maxnguyen.server.exception.InvalidCredentialsException;
import maxnguyen.server.exception.UserAlreadyExistException;
import maxnguyen.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @Autowired

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody UserRequest userRequest){
        try {
            userService.registerUser(userRequest);
            return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
        } catch (UserAlreadyExistException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        try {
            String token = userService.loginUser(loginRequest);
            return new ResponseEntity<>(token, HttpStatus.OK);
        } catch (InvalidCredentialsException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }


}
