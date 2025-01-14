"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import axios from 'axios';

function Page() {
    const [messages, setMessages] = useState([]);
    const [msg, setMsg] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleInputChange = (e) => {
        if (e.target.name === "msg") {
            setMsg(e.target.value);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsTyping(true);
        let message = {
            role: "user",
            content: msg
        }
        setMessages([...messages, message]);
        setMsg('');

        let res = await axios.post("/api/chatboat", {
            data: message
        })

        console.log(res.data.data);
        setMessages([...messages, res.data.data]);
        setIsTyping(false);

    }

    return (
        <div>
            <div className="flex flex-col h-screen max-w-2xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>
                <ScrollArea className="flex-grow mb-4 p-4 border rounded-md">
                    {messages.map((message) => (
                        <div
                            key={Math.random()}
                            className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'
                                }`}
                        >
                            <span
                                className={`inline-block p-2 rounded-lg ${message.role === 'user'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-black'
                                    }`}
                            >
                                {message.content}
                            </span>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="text-left">
                            <span className="inline-block p-2 rounded-lg bg-gray-200 text-black">
                                AI is typing...
                            </span>
                        </div>
                    )}
                </ScrollArea>
                <form onSubmit={onSubmit} className="flex gap-2">
                    <Input
                        id="msg"
                        name="msg"
                        value={msg}
                        onChange={handleInputChange}
                        placeholder="Type your message here..."
                        className="flex-grow"
                    />
                    <Button type="submit" disabled={isTyping}>
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Page