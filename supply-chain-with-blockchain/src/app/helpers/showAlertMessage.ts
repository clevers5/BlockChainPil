import Swal from "sweetalert2";

export class ShowAlertMessage {
  public message = "";

  public showSuccessAlert(message: string) {
    this.message = message;
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  public showErrorAlert(message: string) {
    this.message = message;
    Swal.fire({
      position: "center",
      icon: "error",
      title: message,
      text: "Algo no salió bien",
      timer: 5000,
    });
  }

  public showErrorTeaching(message: string, text: string) {
    this.message = message;
    Swal.fire({
      position: "center",
      icon: "error",
      title: message,
      text: text,
    });
  }

  public showInfoAlert(message: string) {
    this.message = message;
    Swal.fire({
      position: "center",
      icon: "info",
      title: message,
      text: "",
      timer: 5000,
    });
  }

  public showWarningAlert(message: string) {
    this.message = message;
    Swal.fire({
      position: "center",
      icon: "warning",
      title: message,
      text: "",
      timer: 5000,
    });
  }

  public showSuccess(message: string) {
    this.message = message;
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      timer: 5000,
    });
  }

  public showError(message: string) {
    this.message = message;
    Swal.fire({
      position: "center",
      icon: "error",
      title: message,
      timer: 5000,
    });
  }

  public showCancelAlert(message: string, submessage: string) {
    Swal.fire({
      title: message,
      text: submessage,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#E83E8C",
      cancelButtonColor: "#4A4B4F",
      cancelButtonText: "No",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.value) {
        window.location.reload();
      }
    });
  }
}
