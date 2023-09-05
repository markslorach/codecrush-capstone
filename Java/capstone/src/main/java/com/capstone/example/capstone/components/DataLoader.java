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

    public void run(ApplicationArguments args) {

        User billy = new User(300, 999, "Billy Mitchell", "King of Kong");
        User josie = new User(0, 10, "Josie", "I'm just a Golden Retriever");
        User steve = new User(0, 0, "Steve Ballmer", "Developers developers developers develop...");

//        Question questionBeginner1 = new Question("What will the output be for: print(3 * 2)?", "You might have used a different symbol when you learned this in school", 1, 1, "We use '*' to multiply values, rather than 'x'");
//        questionRepository.save(questionBeginner1);
//        Question questionIntermediate1 = new Question("This is intermediate question day 1", "This is a hint", 1, 2, "Explanation");
//        questionRepository.save(questionIntermediate1);
//        Question questionAdvanced1 = new Question("This is advanced question day 1", "This is a hint", 1, 3, "Explanation");
//        questionRepository.save(questionAdvanced1);
//
//        Answer answerBeginner1 = new Answer("32 ", false, questionBeginner1);
//        answerRepository.save(answerBeginner1);
//        Answer answerBeginner2 = new Answer("6", true, questionBeginner1);
//        answerRepository.save(answerBeginner2);
//        Answer answerBeginner3 = new Answer("5 ", false, questionBeginner1);
//        answerRepository.save(answerBeginner3);
//
//        Answer answerIntermediate1 = new Answer("This is intermediate answer1 which is correct day 1 ", true, questionIntermediate1);
//        answerRepository.save(answerIntermediate1);
//        Answer answerIntermediate2 = new Answer("This is intermediate answer2 which is correct day 1 ", false, questionIntermediate1);
//        answerRepository.save(answerIntermediate2);
//        Answer answerIntermediate3 = new Answer("This is intermediate answer3 which is correct day 1 ", false, questionIntermediate1);
//        answerRepository.save(answerIntermediate3);
//
//        Answer answerAdvanced1 = new Answer("This is advanced answer1 which is correct day 1 ", true, questionAdvanced1);
//        answerRepository.save(answerAdvanced1);
//        Answer answerAdvanced2 = new Answer("This is advanced answer2 which is correct day 1 ", false, questionAdvanced1);
//        answerRepository.save(answerAdvanced2);
//        Answer answerAdvanced3 = new Answer("This is advanced answer3 which is correct day 1 ", false, questionAdvanced1);
//        answerRepository.save(answerAdvanced3);
//
//
//
//        Question questionBeginner2 = new Question("What does the 'len()' function do?", "This would be very helpful with a list", 2, 1, "len() is short for length.");
//        questionRepository.save(questionBeginner2);
//        Question questionIntermediate2 = new Question("This is intermediate question day 2", "This is a hint", 2, 2, "Explanation");
//        questionRepository.save(questionIntermediate2);
//        Question questionAdvanced2 = new Question("This is advanced question day 2", "This is a hint", 2, 3, "Explanation");
//        questionRepository.save(questionAdvanced2);
//
//        Answer answerBeginner4 = new Answer("Multiplies numbers", false, questionBeginner2);
//        answerRepository.save(answerBeginner4);
//        Answer answerBeginner5 = new Answer("Calculates the length of an object", true, questionBeginner2);
//        answerRepository.save(answerBeginner5);
//        Answer answerBeginner6 = new Answer("Converts a number to a string", false, questionBeginner2);
//        answerRepository.save(answerBeginner6);
//
//        Answer answerIntermediate4 = new Answer("This is intermediate answer1 which is correct day 2", true, questionIntermediate2);
//        answerRepository.save(answerIntermediate4);
//        Answer answerIntermediate5 = new Answer("This is intermediate answer2 which is correct day 2", false, questionIntermediate2);
//        answerRepository.save(answerIntermediate5);
//        Answer answerIntermediate6 = new Answer("This is intermediate answer3 which is correct day 2", false, questionIntermediate2);
//        answerRepository.save(answerIntermediate6);
//
//        Answer answerAdvanced4 = new Answer("This is advanced answer1 which is correct day 2", true, questionAdvanced2);
//        answerRepository.save(answerAdvanced4);
//        Answer answerAdvanced5 = new Answer("This is advanced answer2 which is correct day 2", false, questionAdvanced2);
//        answerRepository.save(answerAdvanced5);
//        Answer answerAdvanced6 = new Answer("This is advanced answer3 which is correct day 2", false, questionAdvanced2);
//        answerRepository.save(answerAdvanced6);
//
//        Question questionBeginner3 = new Question("What is the result of 10 % 3?", "Think about what happens when you divide 10 by 3.", 3, 1, "The modulus, or '%', tells us what integer is left over when one integer is divided by the other.");
//        questionRepository.save(questionBeginner3);
//        Question questionIntermediate3 = new Question("This is intermediate question day 3", "This is a hint", 3, 2, "Explanation");
//        questionRepository.save(questionIntermediate3);
//        Question questionAdvanced3 = new Question("This is advanced question day 3", "This is a hint", 3, 3, "Explanation");
//        questionRepository.save(questionAdvanced3);
//
//        Answer answerBeginner7 = new Answer("1", true, questionBeginner3);
//        answerRepository.save(answerBeginner7);
//        Answer answerBeginner8 = new Answer("3.3", false, questionBeginner3);
//        answerRepository.save(answerBeginner8);
//        Answer answerBeginner9 = new Answer("10", false, questionBeginner3);
//        answerRepository.save(answerBeginner9);
//
//        Answer answerIntermediate7 = new Answer("This is intermediate answer1 which is correct day 3", true, questionIntermediate3);
//        answerRepository.save(answerIntermediate7);
//        Answer answerIntermediate8 = new Answer("This is intermediate answer2 which is correct day 3", false, questionIntermediate3);
//        answerRepository.save(answerIntermediate8);
//        Answer answerIntermediate9 = new Answer("This is intermediate answer3 which is correct day 3", false, questionIntermediate3);
//        answerRepository.save(answerIntermediate9);
//
//        Answer answerAdvanced7 = new Answer("This is advanced answer1 which is correct day 3", true, questionAdvanced3);
//        answerRepository.save(answerAdvanced7);
//        Answer answerAdvanced8 = new Answer("This is advanced answer2 which is correct day 3", false, questionAdvanced3);
//        answerRepository.save(answerAdvanced8);
//        Answer answerAdvanced9 = new Answer("This is advanced answer3 which is correct day 3", false, questionAdvanced3);
//        answerRepository.save(answerAdvanced9);
//
//        Question questionBeginner4 = new Question("How do you create a dictionary in Python?", "Think carefully about the placement of commas and colons", 4, 1, "Dictionary keys and values are seperated by colons and contained within curly brackets");
//        questionRepository.save(questionBeginner4);
//        Question questionIntermediate4 = new Question("This is intermediate question day 4", "This is a hint", 4, 2, "Explanation");
//        questionRepository.save(questionIntermediate4);
//        Question questionAdvanced4 = new Question("This is advanced question day 4", "This is a hint", 4, 3, "Explanation");
//        questionRepository.save(questionAdvanced4);
//
//        Answer answerBeginner10 = new Answer("{ key : value }", true, questionBeginner4);
//        answerRepository.save(answerBeginner10);
//        Answer answerBeginner11 = new Answer("(key, value)", false, questionBeginner4);
//        answerRepository.save(answerBeginner11);
//        Answer answerBeginner12 = new Answer("[key, value]", false, questionBeginner4);
//        answerRepository.save(answerBeginner12);
//
//        Answer answerIntermediate10 = new Answer("This is intermediate answer1 which is correct day 4", true, questionIntermediate4);
//        answerRepository.save(answerIntermediate10);
//        Answer answerIntermediate11 = new Answer("This is intermediate answer2 which is correct day 4", false, questionIntermediate4);
//        answerRepository.save(answerIntermediate11);
//        Answer answerIntermediate12 = new Answer("This is intermediate answer3 which is correct day 4", false, questionIntermediate4);
//        answerRepository.save(answerIntermediate12);
//
//        Answer answerAdvanced10 = new Answer("This is advanced answer1 which is correct day 4", true, questionAdvanced4);
//        answerRepository.save(answerAdvanced10);
//        Answer answerAdvanced11 = new Answer("This is advanced answer2 which is correct day 4", false, questionAdvanced4);
//        answerRepository.save(answerAdvanced11);
//        Answer answerAdvanced12 = new Answer("This is advanced answer3 which is correct day 4", false, questionAdvanced4);
//        answerRepository.save(answerAdvanced12);
//
//        Question questionBeginner5 = new Question("What is the correct way to define a function in Python?", "The word define is important, but remember you may have to type this command multiple times!", 5, 1, "'def' is short for 'define'.");
//        questionRepository.save(questionBeginner5);
//        Question questionIntermediate5 = new Question("This is intermediate question day 5", "This is a hint", 5, 2, "Explanation");
//        questionRepository.save(questionIntermediate5);
//        Question questionAdvanced5 = new Question("This is advanced question day 5", "This is a hint", 5, 3, "Explanation");
//        questionRepository.save(questionAdvanced5);
//
//        Answer answerBeginner13 = new Answer("define function_name():", false, questionBeginner5);
//        answerRepository.save(answerBeginner13);
//        Answer answerBeginner14 = new Answer("func function_name():", false, questionBeginner5);
//        answerRepository.save(answerBeginner14);
//        Answer answerBeginner15 = new Answer("def function_name():", true, questionBeginner5);
//        answerRepository.save(answerBeginner15);
//
//        Answer answerIntermediate13 = new Answer("This is intermediate answer1 which is correct day 5", true, questionIntermediate5);
//        answerRepository.save(answerIntermediate13);
//        Answer answerIntermediate14 = new Answer("This is intermediate answer2 which is correct day 5", false, questionIntermediate5);
//        answerRepository.save(answerIntermediate14);
//        Answer answerIntermediate15 = new Answer("This is intermediate answer3 which is correct day 5", false, questionIntermediate5);
//        answerRepository.save(answerIntermediate15);
//
//        Answer answerAdvanced13 = new Answer("This is advanced answer1 which is correct day 5", true, questionAdvanced5);
//        answerRepository.save(answerAdvanced13);
//        Answer answerAdvanced14 = new Answer("This is advanced answer2 which is correct day 5", false, questionAdvanced5);
//        answerRepository.save(answerAdvanced14);
//        Answer answerAdvanced15 = new Answer("This is advanced answer3 which is correct day 5", false, questionAdvanced5);
//        answerRepository.save(answerAdvanced15);
//
//        Question questionBeginner6 = new Question("Which of the following is an infinite loop?", "Think about a value you cannot change", 6, 1, "'1' will always exist, so checking it's existence will always return true.");
//        questionRepository.save(questionBeginner6);
//        Question questionIntermediate6 = new Question("This is intermediate question day 6", "This is a hint", 6, 2, "Explanation");
//        questionRepository.save(questionIntermediate6);
//        Question questionAdvanced6 = new Question("This is advanced question day 6", "This is a hint", 6, 3, "Explanation");
//        questionRepository.save(questionAdvanced6);
//
//        Answer answerBeginner16 = new Answer("while False:", false, questionBeginner6);
//        answerRepository.save(answerBeginner16);
//        Answer answerBeginner17 = new Answer("while 1:", true, questionBeginner6);
//        answerRepository.save(answerBeginner17);
//        Answer answerBeginner18 = new Answer("while 'a' > 'b':", false, questionBeginner6);
//        answerRepository.save(answerBeginner18);
//
//        Answer answerIntermediate16 = new Answer("This is intermediate answer1 which is correct day 6", true, questionIntermediate6);
//        answerRepository.save(answerIntermediate16);
//        Answer answerIntermediate17 = new Answer("This is intermediate answer2 which is correct day 6", false, questionIntermediate6);
//        answerRepository.save(answerIntermediate17);
//        Answer answerIntermediate18 = new Answer("This is intermediate answer3 which is correct day 6", false, questionIntermediate6);
//        answerRepository.save(answerIntermediate18);
//
//        Answer answerAdvanced16 = new Answer("This is advanced answer1 which is correct day 6", true, questionAdvanced6);
//        answerRepository.save(answerAdvanced16);
//        Answer answerAdvanced17 = new Answer("This is advanced answer2 which is correct day 6", false, questionAdvanced6);
//        answerRepository.save(answerAdvanced17);
//        Answer answerAdvanced18 = new Answer("This is advanced answer3 which is correct day 6", false, questionAdvanced6);
//        answerRepository.save(answerAdvanced18);
//
//        Question questionBeginner7 = new Question("How do you convert a string to an integer in Python?", "Think about which value should be used as an argument.", 0, 1, "The string would be used as an argument, and the result of the function will be an integer");
//        questionRepository.save(questionBeginner7);
//        Question questionIntermediate7 = new Question("This is intermediate question day 7", "This is a hint", 0, 2, "Explanation");
//        questionRepository.save(questionIntermediate7);
//        Question questionAdvanced7 = new Question("This is advanced question day 7", "This is a hint", 0, 3, "Explanation");
//        questionRepository.save(questionAdvanced7);
//
//        Answer answerBeginner19 = new Answer("int(string)", true, questionBeginner7);
//        answerRepository.save(answerBeginner19);
//        Answer answerBeginner20 = new Answer("string.to_i()", false, questionBeginner7);
//        answerRepository.save(answerBeginner20);
//        Answer answerBeginner21 = new Answer("string(1)", false, questionBeginner7);
//        answerRepository.save(answerBeginner21);
//
//        Answer answerIntermediate19 = new Answer("This is intermediate answer1 which is correct day 7", true, questionIntermediate7);
//        answerRepository.save(answerIntermediate19);
//        Answer answerIntermediate20 = new Answer("This is intermediate answer2 which is correct day 7", false, questionIntermediate7);
//        answerRepository.save(answerIntermediate20);
//        Answer answerIntermediate21 = new Answer("This is intermediate answer3 which is correct day 7", false, questionIntermediate7);
//        answerRepository.save(answerIntermediate21);
//
//        Answer answerAdvanced19 = new Answer("This is advanced answer1 which is correct day 7", true, questionAdvanced7);
//        answerRepository.save(answerAdvanced19);
//        Answer answerAdvanced20 = new Answer("This is advanced answer2 which is correct day 7", false, questionAdvanced7);
//        answerRepository.save(answerAdvanced20);
//        Answer answerAdvanced21 = new Answer("This is advanced answer3 which is correct day 7", false, questionAdvanced7);
//        answerRepository.save(answerAdvanced21);
    }
}

