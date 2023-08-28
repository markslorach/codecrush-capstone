package com.capstone.example.capstone;

import com.capstone.example.capstone.models.User;
import com.capstone.example.capstone.repositories.UserRepository;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CapstoneApplicationTests {

	@Autowired
	UserRepository userRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void AddUser(){
		User jimmy = new User("Jimmy", 3, 15, 2, "WeeJimmy", "password");
		userRepository.save(jimmy);
	}
}
