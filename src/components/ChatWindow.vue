<template>
    <div class="chat-window">
        <div class="messages" ref="msgBox">
            <div class="single" v-for="message in formattedMessage" :key="message.id">
                <span class="createdAt">{{message.createdAt}}</span>
                <span class="name">{{message.name}}</span>
                <span class="message">{{message.message}}</span>
            </div>
        </div>
    </div>
</template>
    
<script>
import { computed,ref, onUpdated } from 'vue';
import { db } from '@/firebase/config';
import {formatDistanceToNow } from "date-fns"
export default {
    setup() {
    let messages = ref([]);
        let msgBox=ref(null)
        
        // auto scrolling
        onUpdated(() => {
          msgBox.value.scrollTop = msgBox.value.scrollHeight
        })

        let formattedMessage = computed(() => {
            return messages.value.map((msg) => {
                let formatTime = formatDistanceToNow(msg.createdAt.toDate())
                return {...msg , createdAt: formatTime}
            })
        })

        db.collection("messages")
        .orderBy("createdAt")
        .onSnapshot((snap) => {
            let result = [];
            snap.docs.forEach((doc) => {
            let document = { ...doc.data(), id: doc.id }
            doc.data().createdAt && result.push(document);  
            })
            messages.value = result;
        })
        return {messages, formattedMessage, msgBox}
    }
}
</script>
    
<style>
         .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .createdAt {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>