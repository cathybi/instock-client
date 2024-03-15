// import React from "react";
// import "./DeleteInventory.scss";
// import closeIcon from "../../assets/icons/close-24px.svg";
// import axios from "axios";
// import Modal from "react-modal";

// function DeleteInventory(props) {
//   const urlForInventoryDelete = `http://localhost:5050/inventories/${id}`;
//   const deleteInventory = () => {
//     axios
//       .delete(urlForInventoryDelete)
//       .then(() => {
//         setInventoryToDisplay(
//           inventory.filter((inventoryItem) => {
//             return inventoryItem.id !== id;
//           })
//         );
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <>
//       <section className="delete">
//         <img className="delete__close-icon" src={closeIcon} alt="Close" />
//         <div className="delete__text-container">
//           <h1 className="delete__text-container-title">
//             Delete {props.itemName} inventory item?
//           </h1>
//           <p className="delete__text-container-subtitle">
//             Please confirm that you'd like to delete {props.itemName} from the
//             inventory list. You won't be able to undo this action.
//           </p>
//         </div>
//         <div className="delete__button-container">
//           <button
//             onClick={(e) => props.cancelModal()}
//             className="delete__button-container-cancel"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={(e) => props.deleteInventory()}
//             className="delete__button-container-delete"
//           >
//             Delete
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }
// export default DeleteInventory;
