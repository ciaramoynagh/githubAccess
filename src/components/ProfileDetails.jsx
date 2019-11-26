import React from 'react';
import Moment from 'react-moment'; const imgStye = {
    borderRadius: "100%",
    width: "200px",
    height: "200px"
}; const ProfileDetails = (props) => {
    return (
        <div>
            <p></p>
            <div>
                {props.infoclean.avatar_url ?
                    <img src={props.infoclean.avatar_url}
                        alt="Profile"
                        style={imgStye} /> : null}
            </div>
            <div>
                {props.infoclean.name ? <div><p className="Sub-Headings">Name:</p><p>{props.infoclean.name}</p></div> : null}
            </div>
            <div>
                {props.infoclean.bio ? <div><p className="Sub-Headings">Bio:</p><p>{props.infoclean.bio}</p></div> : null}
            </div>
            <div>
                {props.infoclean.created_at ? <div><p className="Sub-Headings">Joined Github:</p><p>{
                    <Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</p></div> : null}
            </div>
            <div>
                {props.infoclean.blog ? <div><p className="Sub-Headings">Blog:</p><p><a href={
                    props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
                        : "http://" + props.infoclean.blog} target="_blank">{props.infoclean.blog}</a></p></div> : null}
            </div>
            <div>
                {props.infoclean.location ? <div><p className="Sub-Headings">Location:</p><p>{props.infoclean.location}</p></div> : null}
            </div>
            <div>
                {props.infoclean.company ? <div><p className="Sub-Headings">Company:</p><p>{props.infoclean.company}</p></div> : null}
            </div>
            <div>
                {props.infoclean.public_repos ? <div><p className="Sub-Headings">Public Repositories:</p><p>{props.infoclean.public_repos}</p></div> : null}
            </div>
            <div>
                {props.infoclean.followers ? <div><p className="Sub-Headings">Number of Followers:</p><p>{props.infoclean.followers}</p></div> : null}
            </div>
            <div>
                {props.infoclean.following ? <div><p className="Sub-Headings">Number Following:</p><p>{props.infoclean.following}</p></div> : null}
            </div>
            <div>
                {props.infoclean.login ? <div><p className="Sub-Headings">GitHub Activity Chart:</p>{<img src={"http://ghchart.rshah.org/" + props.infoclean.login} alt="Github chart" />
                }<br /></div> : null}
            </div>
            <div>
                {props.infoclean.html_url ? <div><p className="Headings"><a href={props.infoclean.html_url} target="_blank">Click Here to View User on GitHub</a></p></div> : null}
                </div>
        </div>
    )
}; export default ProfileDetails;