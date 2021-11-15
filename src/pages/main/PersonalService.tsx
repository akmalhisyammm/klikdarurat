import { IonContent,IonIcon, IonSearchbar,IonItemOptions,IonList, IonFab, IonFabButton,IonItemGroup,IonButton, IonItemSliding,IonItemDivider, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar,IonListHeader, IonItem, IonLabel, IonAvatar,IonThumbnail, IonImg, IonCard, IonNote } from '@ionic/react';
import { add, swapVerticalOutline  } from 'ionicons/icons';
import React,  { useState,useRef } from 'react';



const PersonalService: React.FC = () => {

    return (
      <IonPage>
        <IonHeader  >
         <h1> Personal Servis Page</h1>
         <IonToolbar color="primary" >
         <p> </p>
        <IonSearchbar color="light" placeholder="Cari Kontak..."></IonSearchbar>
        </IonToolbar>
        </IonHeader>
        <IonContent >
      
            <IonListHeader>  A -Z </IonListHeader>
                    
          <IonList>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>A</IonLabel>
          </IonItemDivider>
          <IonItem>
            <IonLabel color ="primary" >Ade Kiswara</IonLabel>
            <IonNote slot="end"> Note </IonNote>
          </IonItem>
      

          <IonItemDivider>
            <IonLabel>D</IonLabel>
          </IonItemDivider>


          <IonItem lines="inset">
            <IonLabel color ="primary" >Dimas Lesmana</IonLabel>
            <IonNote slot="end"> Note </IonNote>
          </IonItem>
 

          <IonItemDivider>
            <IonLabel>I</IonLabel>
          </IonItemDivider>

          <IonItem lines="full">
            <IonLabel color ="primary" >Indra Prasetya Hadiwana</IonLabel>
            <IonNote slot="end"> Note </IonNote>
          </IonItem>



          <IonItemDivider>
            <IonLabel>M</IonLabel>
          </IonItemDivider>

          <IonItem >
            <IonLabel color ="primary" >Muhammad Akmal Hiyam</IonLabel>
            <IonNote slot="end"> Note </IonNote>
          </IonItem>
          <IonItem>
            <IonLabel color ="primary" >Muhammad Rezalutfi</IonLabel>
            <IonNote slot="end"> Note </IonNote>
          </IonItem>


          </IonItemGroup>
            </IonList>

            <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

  
        </IonContent>
      </IonPage>
    );
  };
  

export default PersonalService;
