package com.tutorial.backend.controller;

import com.tutorial.backend.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member/*")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000") // 허용할 출처
public class MemberController {

    private final MemberService memberService;



}
