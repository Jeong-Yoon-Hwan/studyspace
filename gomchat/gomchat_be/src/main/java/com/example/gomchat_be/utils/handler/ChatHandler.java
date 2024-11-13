package com.example.gomchat_be.utils.handler;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.google.gson.Gson;

@Component
public class ChatHandler extends TextWebSocketHandler {
  private Set<WebSocketSession> sessions = new HashSet<>();
  Gson gson = new Gson();
  
  // 클라이언트 연결 성공 후 실행
  @Override
  public void afterConnectionEstablished(WebSocketSession session) throws Exception {
    sessions.add(session);
    System.out.println("연결되었습니다." + session);
  }

  // 클라이언트 연결 해제 후 실행
  @Override
  public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
    sessions.remove(session);
     System.out.println("해제되었습니다." + session);
  }

  // 서버에 메시지가 수신되었을 경우
  @Override
  protected void handleTextMessage(WebSocketSession session, TextMessage message){
    try {
      System.out.println("받은 메시지: " + gson.fromJson(message.getPayload(), MessageVO.class));
      MessageVO parseMesssage = gson.fromJson(message.getPayload(), MessageVO.class);
      // session.sendMessage(new TextMessage(gson.toJson(parseMesssage)));
      broadcast(parseMesssage);

    } catch (Exception e) {
      System.out.println(e);
    }
  }

  public void broadcast(MessageVO message){
    try {
      for(WebSocketSession session: sessions){
        session.sendMessage(new TextMessage(gson.toJson(message)));
      }
    } catch (Exception e){
      System.out.println(e);
    }
  }
  

}
