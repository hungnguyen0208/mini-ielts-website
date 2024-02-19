package maxnguyen.server.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "test_id")
    private Test test;

    private Long questionId;
    private String userAnswer;
    private String correctAnswer;
    private boolean answerCheck;
}
