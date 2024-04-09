package com.tutorial.backend.controller;


import com.tutorial.backend.controller.dto.PlaceDto;
import com.tutorial.backend.controller.dto.ResultDto;
import com.tutorial.backend.entity.Member;
import com.tutorial.backend.entity.Place;
import com.tutorial.backend.entity.PlaceHeader;
import com.tutorial.backend.service.MemberService;
import com.tutorial.backend.service.place.PlaceService;
import com.tutorial.backend.service.placeHeader.PlaceHeaderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/place")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class PlaceController {

    private final PlaceService placeService;
    private final PlaceHeaderService placeHeaderService;
    private final MemberService memberService;
    
    @PostMapping("/save")
    public ResponseEntity<ResultDto<String>> saveOnePlace(@RequestBody PlaceDto placeDto, Authentication authentication){
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        PlaceHeader placeHeader = new PlaceHeader();
        placeHeader.setHeaderName(placeDto.getName());
        Optional<Member> foundMember = memberService.getMemberByMemberEmailAndPassword(userDetails.getUsername(), userDetails.getPassword());
        if(foundMember.isPresent()){
            placeHeader.setMember(foundMember.get());
            PlaceHeader foundPlaceHeader = placeHeaderService.saveOnePlaceHeader(placeHeader);
            placeService.saveOnePlace(foundPlaceHeader.getId(), placeDto);
        }
        return ResponseEntity.ok().body(ResultDto.res(HttpStatus.ACCEPTED, "장소 등록에 성공했습니다!"));

    };


}
