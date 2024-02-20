package maxnguyen.server.service;

import maxnguyen.server.dto.LoginRequest;
import maxnguyen.server.dto.UserRequest;
import maxnguyen.server.entity.User;
import maxnguyen.server.exception.UserAlreadyExistException;
import maxnguyen.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
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

}
