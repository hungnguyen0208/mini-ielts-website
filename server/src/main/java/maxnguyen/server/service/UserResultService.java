package maxnguyen.server.service;

import maxnguyen.server.entity.Test;
import maxnguyen.server.entity.User;
import maxnguyen.server.entity.UserResult;
import maxnguyen.server.repository.UserResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserResultService {

    private final UserResultRepository userResultRepository;

    @Autowired
    public UserResultService(UserResultRepository userResultRepository) {
        this.userResultRepository = userResultRepository;
    }

    public UserResult saveUserResult(UserResult userResult) {
        return userResultRepository.save(userResult);
    }

    public List<UserResult> getUserResultListByUser(User user) {
        return userResultRepository.findByUser(user);
    }

    public List<UserResult> getUserResultListByTest(Test test) {
        return userResultRepository.findByTest(test);
    }
}
