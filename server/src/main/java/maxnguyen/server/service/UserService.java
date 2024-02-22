package maxnguyen.server.service;

import maxnguyen.server.dto.LoginRequest;
import maxnguyen.server.dto.UserRequest;
import maxnguyen.server.entity.User;
import maxnguyen.server.exception.InvalidCredentialsException;
import maxnguyen.server.exception.UserAlreadyExistException;
import maxnguyen.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.AuthenticationManager;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    public User signUp(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public void registerUser(UserRequest userRequest){
        if(userRepository.findByEmail(userRequest.getEmail()).isPresent()){
            throw new UserAlreadyExistException("User with email " + userRequest.getEmail() + " already exists");
        }

        User newUser = new User();
        newUser.setName(userRequest.getName());
        newUser.setEmail(userRequest.getEmail());

        String hashedPassword = passwordEncoder.encode(userRequest.getPassword());
        newUser.setPassword(hashedPassword);

        userRepository.save(newUser);
    }

    public String loginUser(LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            return "Authentication successful";
        } catch (AuthenticationException e) {
            throw new InvalidCredentialsException("Invalid email or password", e);
        }
    }
}