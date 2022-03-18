import React, { useState, useRef, forwardRef } from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import { Button, Box, TextField } from "@material-ui/core/";

import {
    AccountCircleRounded as AccountCircleRoundedIcon,
    ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
    ThumbUpAltRounded as ThumbUpAltRoundedIcon,
    Comment  as CommentIcon,
    Share as ShareIcon
  } from "@material-ui/icons/";

import Menu from "../../Menu";
import HeaderBar from "../../HeaderBar/index";
import LegislatorCard from "../../LegislatorCard/index";
import ModalComponent from "../../Modal/index";
import Modal from "../../ModalRequirements";

import { mockRequirement } from "../../../service/api";


export default function LegislatorHomePage() {

    const modalRef = useRef();
     
    const [requirement, setRequirement] = useState(mockRequirement);

    const [support, setSupport] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [comment, setComment] = useState("");

    const handleSupport = () => {
        setSupport(!support);
        if (!support) setRequirement({ ...requirement, likes: requirement.likes + 1 });
        // POST -> /support
        else setRequirement({ ...requirement, likes: requirement.likes - 1 }); // POST -> /unsupport
      }; 
    
    const handleShowComments = () => {
        setShowComments(!showComments);
    }

    const handleComment = () => {
        const data = {
          profile: requirement.profile.photo,
          name: requirement.profile.name,
          message: comment,
        };
    
        if (comment) {
          setRequirement({
            ...requirement,
            comments: [...requirement.comments, data],
          });
          setComment("");
        }
      };

    return (
        <div>
            <Menu />

            <HeaderBar />
                      
            <LegislatorCard requeriments={299} analysis={274} denied={10}
            done = {15}>  </LegislatorCard>

            <section className="requirement_container"> 
                <section  className="requirement_content"  onClick={() => modalRef.current.openModal()}>
                    
                    <div className="header_title">
                        <p>Reivindicação em destaque</p>
                        <Box className="status">
                            <span>{requirement.status}</span>
                        </Box>
                    </div>
                        
                    <div className="header_profile">
                                                             
                            <Box className="profile">

                                { requirement.profile.photo ? (
                                <img
                                    src={requirement.profile.photo}
                                    width={30}
                                    height={30}
                                    alt="Image"
                                />
                                    ) : (
                                    <AccountCircleRoundedIcon color="action" />
                                )}

                                <Box className="info">
                                    <p>Nome: <strong>{requirement.profile.name}</strong></p>
                                    <p>Cidade: <strong>{requirement.profile.city}</strong></p> 
                                </Box>

                            </Box>

                            <h5 className="date">
                                    <strong> Data de publicação:  </strong>
                                    <p>{requirement.profile.dateOccurrence}</p>
                            </h5>                      
                    </div>

                    <p className="description"> {requirement.message}</p>

        
                </section>

                <Box className="box_support">
                        <Button onClick={() => handleSupport()}>
                            {support ? (
                            <ThumbUpAltRoundedIcon />
                            ) : (
                            <ThumbUpAltOutlinedIcon color="action" />
                            )}
                        </Button>
                       
                        <Button onClick = {() => handleShowComments()}> <CommentIcon /></Button>
                   
                    </Box>

                <Modal ref={modalRef} requirement = {requirement} /> 

            </section>
            
            <section className="comments_container">
            {showComments ? (
                <Box className="right_comments">
                    
                        <Box className="box_comments">
                            <div className="header_comments">
                                <h4 className="title_comments">Comentários</h4>
                                <Button className="button_hide_comments" 
                                 onClick = {() => handleShowComments()}> ocultar </Button>
                            </div>
                            
                            {requirement.comments.map((item, id) => (
                                <Box key={id} className="comments">
                                    <Box className="profile">
                                        {item.profile ? (
                                        <img
                                            src={item.profile}
                                            width={20}
                                            height={20}
                                            alt="Profile"
                                        />
                                        ) : (
                                        <AccountCircleRoundedIcon color="action" />
                                        )}
                                        <small>{item.name}</small>
                                    </Box>
                                    <p>{item.message}</p>
                                    </Box>
                            ))}
                            <span id="downScroll" />
                        </Box>

                        <Box className="box_write">
                            <input
                            value = {comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Digite sua mensagem..."
                            onKeyPress={(event) => {
                              if (event.key === "Enter") {
                                handleComment();
                              }
                            }}
                            type="text"
                            required                            
                            />

                            <Button
                                href="#downScroll"
                                onClick={() => handleComment()}
                                className="comment_submit"
                            >
                                Comentar
                            </Button>

                        </Box>

                        
                </Box>
                            
            ) : (
                <></>
            )}
            </section>
            

                     
        </div>
    )
}