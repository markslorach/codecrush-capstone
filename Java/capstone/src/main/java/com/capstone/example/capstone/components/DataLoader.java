package com.capstone.example.capstone.components;


import com.capstone.example.capstone.models.Answer;
import com.capstone.example.capstone.models.Question;
import com.capstone.example.capstone.models.QuestionLevel;
import com.capstone.example.capstone.models.User;
import com.capstone.example.capstone.repositories.AnswerRepository;
import com.capstone.example.capstone.repositories.QuestionRepository;
import com.capstone.example.capstone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component

public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;
    @Autowired
    AnswerRepository answerRepository;
    @Autowired
    QuestionRepository questionRepository;

    public DataLoader() {}

    public void run(ApplicationArguments args){
        User Mark = new User("Mark", 3, 10, 1, "mark_s", "password");
        userRepository.save(Mark);

        User Paul = new User("Paul", 2, 5, 2, "paul_k", "password1");
        userRepository.save(Paul);

        User Ewan = new User("Ewan", 4, 20, 3, "ewan_l", "password2");
        userRepository.save(Ewan);

        User Ian = new User("Ian", 5, 25, 4, "ian_m", "password3");
        userRepository.save(Ian);

        Question questionBeginner1 = new Question("This is beginner question day 1", "This is a hint", 2, 1);
        questionRepository.save(questionBeginner1);
        Question questionIntermediate1 = new Question("This is intermediate question day 1", "This is a hint", 2, 2);
        questionRepository.save(questionIntermediate1);
        Question questionAdvanced1 = new Question("This is advanced question day 1", "This is a hint", 2, 3);
        questionRepository.save(questionAdvanced1);

        Answer answerBeginner1 = new Answer("This is beginner answer1 which is correct day 1 ", true, questionBeginner1);
        answerRepository.save(answerBeginner1);
        Answer answerBeginner2 = new Answer("This is beginner answer2 which is wrong day 1", false, questionBeginner1);
        answerRepository.save(answerBeginner2);
        Answer answerBeginner3 = new Answer("This is beginner answer3 which is wrong day ", false, questionBeginner1);
        answerRepository.save(answerBeginner3);

        Answer answerIntermediate1 = new Answer("This is intermediate answer1 which is correct day 1 ", true, questionIntermediate1);
        answerRepository.save(answerIntermediate1);
        Answer answerIntermediate2 = new Answer("This is intermediate answer2 which is correct day 1 ", false, questionIntermediate1);
        answerRepository.save(answerIntermediate2);
        Answer answerIntermediate3 = new Answer("This is intermediate answer3 which is correct day 1 ", false, questionIntermediate1);
        answerRepository.save(answerIntermediate3);

        Answer answerAdvanced1 = new Answer("This is advanced answer1 which is correct day 1 ", true, questionAdvanced1);
        answerRepository.save(answerAdvanced1);
        Answer answerAdvanced2 = new Answer("This is advanced answer2 which is correct day 1 ", false, questionAdvanced1);
        answerRepository.save(answerAdvanced2);
        Answer answerAdvanced3 = new Answer("This is advanced answer3 which is correct day 1 ", false, questionAdvanced1);
        answerRepository.save(answerAdvanced3);
    }

}
