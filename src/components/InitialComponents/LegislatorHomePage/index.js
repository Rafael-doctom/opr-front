import React, { useState, useRef, forwardRef } from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import { Button, Box } from "@material-ui/core/";

import {
    AccountCircleRounded as AccountCircleRoundedIcon,
    ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
    ThumbUpAltRounded as ThumbUpAltRoundedIcon,
    Comment  as CommentIcon,
    CommentOutlined  as CommentOutlinedIcon,
} from "@material-ui/icons/";

import Menu from "../../Menu";
import HeaderBar from "../../HeaderBar/index";
import LegislatorCard from "../../LegislatorCard/index";
import Modal from "../../ModalRequirements";
import { useRequirements } from "../../../contexts/requirementsContext";

export default function LegislatorHomePage() {

    const modalRef = useRef();
    
    const { requirements } = useRequirements();
    const [requirement, setRequirement] = useState(requirements[0]);

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
          profile: requirement.user.photo,
          name: requirement.user.name,
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

    function renderRequirementStatus(){
        if (requirement.status === "concluded") { 
            return(                          
            <span>Concluído</span>
            )                     
        } else if (requirement.status === "not_accepted") { 
            return(                         
           <span>Não aceito</span>
            )                         
        } else { 
            return(                         
            <span>Em avaliação</span>
            )                         
        }
    }

    return (
        <div>
            <Menu />

            <HeaderBar />
                      
            <LegislatorCard requeriments={299} analysis={274} denied={10}
            done = {15} />

            <section className="requirement_legislator_container"> 
                <section  className="requirement_legislator_content"  onClick={() => modalRef.current.openModal()}>
                    
                    <div className="header_title">
                        <strong>Reivindicação em destaque</strong>
                        <Box className="status">                           
                            {renderRequirementStatus()}
                        </Box>
                    </div>
                        
                    <div className="header_profile">
                                                             
                            <Box className="profile">

                                { requirement.user.photo ? (
                                <img
                                    src={requirement.user.photo}
                                    width={30}
                                    height={30}
                                    alt="Image"
                                />
                                    ) : (
                                    <AccountCircleRoundedIcon color="action" />
                                )}

                                <Box className="info">
                                    <p>{requirement.user.name}</p>
                                    <p>{requirement.user.location}</p> 
                                </Box>

                            </Box>

                            <h5 className="date">
                                    <strong> Data de publicação:  </strong>
                                    <p>{requirement.user.dateOccurrence}</p>
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
                       
                        <Button onClick = {() => handleShowComments()}>
                            {showComments ? <CommentIcon /> : <CommentOutlinedIcon />}                            
                             </Button>                  
                    </Box>

                <Modal ref={modalRef} requirement = {requirement} /> 

            </section>
            
            
            {showComments ? (
                <section className="comments_container">
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
                </section>           
            ) : (
                <> </>
            )}                     
        </div>
    )
}