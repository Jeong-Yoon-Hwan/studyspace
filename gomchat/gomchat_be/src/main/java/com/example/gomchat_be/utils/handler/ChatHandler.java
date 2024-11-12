package com.example.gomchat_be.utils.handler;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class ChatHandler extends TextWebSocketHandler {
  private Set<WebSocketSession> sessions = new HashSet<>();
  
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
      session.sendMessage(new TextMessage(message.getPayload()));
    } catch (IOException e) {
      System.out.println(e);
    }
  }
  

}
