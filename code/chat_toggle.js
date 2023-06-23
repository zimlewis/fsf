        var open_chat = false;
        function toggle_chat(){
            
            const chat_bubble = document.getElementById('chat-bubble');
            const chat_toogle = document.getElementById('chat-bubble-toggle');
            if (open_chat){
                chat_bubble.style.left = "100vw"
                chat_toogle.style.right = "1vw"

                open_chat = false
            }else if (!open_chat){
                chat_bubble.style.left = "59.5vw"
                chat_toogle.style.right = "41vw"

                open_chat = true
            }
        }