import { create } from "zustand";
interface WebSocketStore {
  ws: WebSocket | null;
  connectWebSocket: (url: string) => void;
  closeWebSocket: () => void;
  sendMessage: ({ user, msg }: { user: string; msg: string }) => void;
  msg: null;
}

const useWebSocketStore = create<WebSocketStore>((set: any, get: any) => ({
  ws: null,
  msg: null,
  connectWebSocket: (url) => {
    const websocket = new WebSocket(url);

    websocket.onopen = () => {
      console.log("웹소켓 연결이 열렸습니다.");
      set({ wsL: websocket });
    };

    websocket.onclose = () => {
      console.log("웹소켓 연결이 닫혔습니다.");
      set({ ws: null });
    };

    websocket.onmessage = (event) => {
      console.log("받은 메시지: ", event.data);
      set({ msg: event.data });
    };
    set({ ws: websocket });
  },

  closeWebSocket: () => {
    const ws = get().ws;
    if (ws) {
      ws.close();
      set({ ws: null });
    }
  },

  sendMessage: (message: any) => {
    const ws = get().ws;
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
      console.log("메시지 전송: ", message);
    } else {
      console.log("웹소켓이 연결되지 않았습니다.");
    }
  },
}));

export default useWebSocketStore;
