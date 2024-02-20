package maxnguyen.server.repository;

import maxnguyen.server.entity.Test;
import maxnguyen.server.entity.User;
import maxnguyen.server.entity.UserResult;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserResultRepository extends JpaRepository<UserResult, Long> {
    List<UserResult> findByUser(User user);
    List<UserResult> findByTest(Test test);
}
