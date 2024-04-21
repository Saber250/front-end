import Button from "../button/Button";
import "./posts.css";
import profilePicture from "../../assets/default-profil-pic.jpg";
import postImage from "../../assets/restaurant.jpg";

export function Post({
  profilePicture,
  username,
  timeAgo,
  jobTitle,
  description,
  postImage,
  connected,
}) {
  return (
    <div className="post">
      <div className="header space-b">
        <div className="publisher">
          <div className="profil-pic">
            <img src={profilePicture} alt={username} />
          </div>
          <div className="info">
            <p className="username">{username}</p>
            <div className="time-ago">{timeAgo}</div>
          </div>
        </div>
        <div className="three-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <h2 className="job-title">{jobTitle}</h2>
      <p className="description">{description}</p>
      <div className="badges">
        <Badge value="Restoration" />
        <Badge value="Béjaïa" />
        <Badge value="3 ans d'experience" />
        <Badge value="Résponsable d'équipe" />
        <Badge value="Bac +3" />
      </div>
      <div className="post-image">
        <img src={postImage} alt={jobTitle} />
      </div>
      <div className="right">
        {connected && <Button type="postuler" />}
        {!connected && (
          <>
            <Button value="Postuler" style={11} />
          </>
        )}
      </div>
    </div>
  );
}

// This component is a placeholder for a component to contain posts not this way
export function Posts() {
  return (
    <div className="posts">
      <Post
        profilePicture={profilePicture}
        username="Entreprise"
        timeAgo="2 jours"
        jobTitle="Chef cuisinier"
        description="Nous somme en recherche d'un cher cuisinier pour un travail au bureau administratif jusqu'au ramadan, Nous somme en recherche d'un cher cuisinier pour un travail au bureau administratif jusqu'au ramadan, Nous somme en recherche d'un cher cuisinier pour un travail au bureau administratif jusqu'au ramadan"
        postImage={postImage}
        connected={false}
      />
      <Post
        profilePicture={profilePicture}
        username="Entreprise"
        timeAgo="2 jours"
        jobTitle="Chef cuisinier"
        description="Nous somme en recherche d'un cher cuisinier pour un travail au bureau administratif jusqu'au ramadan, Nous somme en recherche d'un cher cuisinier pour un travail au bureau administratif jusqu'au ramadan, Nous somme en recherche d'un cher cuisinier pour un travail au bureau administratif jusqu'au ramadan"
        postImage={postImage}
        connected={false}
      />
      <Post
        profilePicture={profilePicture}
        username="Entreprise"
        timeAgo="2 jours"
        jobTitle="Chef cuisinier"
        description="Nous somme en recherche d'un cher cuisinier pour un travail au bureau administratif jusqu'au ramadan, Nous somme en recherche d'un cher cuisinier pour un travail au bureau administratif jusqu'au ramadan, Nous somme en recherche d'un cher cuisinier pour un travail au bureau administratif jusqu'au ramadan"
        postImage={postImage}
        connected={false}
      />
    </div>
  );
}

function Badge({ value }) {
  return <div className="badge">{value}</div>;
}
