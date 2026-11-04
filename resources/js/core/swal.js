import Swal from 'sweetalert2';

/** $swal — confirm dialog helper used by row actions. */
export function swalConfirm(message = 'Are you sure?', confirmText = 'Confirm') {
    return Swal.fire({
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: confirmText,
        cancelButtonText: 'Cancel',
        customClass: { confirmButton: 'bg-primary text-white rounded px-4 py-2', cancelButton: 'bg-gray-200 rounded px-4 py-2 mr-2' },
        buttonsStyling: false,
    });
}

export function swalSuccess(message) {
    return Swal.fire({ text: message, icon: 'success' });
}

export function swalError(message) {
    return Swal.fire({ text: message, icon: 'error' });
}
