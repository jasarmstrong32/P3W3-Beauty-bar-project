const button = document.getElementById('submit');
button.addEventListener('click', submitFunction);

function submitFunction() {
  let boxes = document.querySelectorAll('input[name="box"]:checked');
  let output = [];
  let contact = [];

  boxes.forEach((box) => {
    output.push(box.value);
  });
  if (output < 1) {
    alert('Please select one or more services to continue.');
  } else {
    if (output.includes('wash')) {
      const washAddOns = document.querySelectorAll(
        'input[name="wash"]:checked'
      );
      washAddOns.forEach((washAddOn) => {
        output.push(`Wash add-on: ${washAddOn.value}`);
      });
    } else if (output.includes('style')) {
      const styleOptions = document.querySelectorAll(
        'input[name="style"]:checked'
      );
      styleOptions.forEach((styleOption) => {
        output.push(`Style: ${styleOption.value}`);
      });

      const styleAddOn = document.querySelectorAll(
        'input[name="style-add-on"]:checked'
      );
      styleAddOn.forEach((addOn) => {
        output.push(`Style add-on: ${addOn.value}`);
      });
    } else if (output.includes('brows')) {
      const browOptions = document.querySelectorAll(
        'input[name="brows"]:checked'
      );
      browOptions.forEach((browOption) => {
        output.push(`Brow method: ${browOption.value}`);
      });
      const browAddOns = document.querySelectorAll(
        'input[name="b-add-on"]:checked'
      );
      browAddOns.forEach((bAddOn) => {
        output.push(`Brow add-on: ${bAddOn.value}`);
      });
    } else if (output.includes('nails')) {
      const nailAddOns = document.querySelectorAll(
        'input[name="nails"]:checked'
      );
      nailAddOns.forEach((nailAddOn) => {
        output.push(`Nail add-on: ${nailAddOn.value}`);
      });
    }

    const nameInput = document.querySelector('#name');

    nameInput.addEventListener('input', () => {
      nameInput.setCustomValidity('');
      nameInput.checkValidity();
      contact.push(`Name: ${nameInput.value}`);
    });

    nameInput.addEventListener('invalid', () => {
      if (nameInput.value === '') {
        nameInput.setCustomValidity('Enter your name!');
      }
    });
    const phoneInput = document.querySelector('#phone');

    phoneInput.addEventListener('input', () => {
      phoneInput.setCustomValidity('');
      phoneInput.checkValidity();
      contact.push(`Phone: ${phoneInput.value}`);
    });

    phoneInput.addEventListener('invalid', () => {
      if (phoneInput.value === '') {
        phoneInput.setCustomValidity('Enter your phone number!');
      }
    });
    const emailInput = document.querySelector('#email');

    emailInput.addEventListener('input', () => {
      emailInput.setCustomValidity('');
      emailInput.checkValidity();
      contact.push(`Email: ${emailInput.value}`);
    });

    emailInput.addEventListener('invalid', () => {
      if (emailInput.value === '') {
        emailInput.setCustomValidity('Enter your email!');
      }
    });
    const dateInput = document.querySelector('#date');

    dateInput.addEventListener('input', () => {
      dateInput.setCustomValidity('');
      dateInput.checkValidity();
      contact.push(`Appointment: ${dateInput.value}`);
    });

    dateInput.addEventListener('invalid', () => {
      if (dateInput.value === '') {
        dateInput.setCustomValidity('Select an appointment date!');
      }
    });
    const commentInput = document.querySelector('#comment');

    commentInput.addEventListener('input', () => {
      commentInput.setCustomValidity('');
      commentInput.checkValidity();
      contact.push(`Reminder(s): ${commentInput.value}`);
    });

    commentInput.addEventListener('invalid', () => {
      if (commentInput.value === '') {
        commentInput.setCustomValidity(
          'Provide the best times and dates to contact you!'
        );
      }
    });

    let total = 0;
    output.forEach((item) => {
      if (item.includes('wash')) {
        total += 45;
      } else if (item.includes('protein')) {
        total += 15;
      } else if (item.includes('trim')) {
        total += 5;
      } else if (item.includes('color')) {
        total += 50;
      } else if (item.includes('cornrows')) {
        total += 20;
      } else if (item.includes('box-braids')) {
        total += 125;
      } else if (item.includes('sew-in')) {
        total += 230;
      } else if (item.includes('pixie-cut')) {
        total += 80;
      } else if (item.includes('silk-press')) {
        total += 150;
      } else if (item.includes('brows')) {
        total += 20;
      } else if (item.includes('tint')) {
        total += 25;
      } else if (item.includes('lamination')) {
        total += 35;
      } else if (item.includes('nails')) {
        total += 25;
      } else if (item.includes('no-chip')) {
        total += 35;
      } else if (item.includes('dip-powder')) {
        total += 30;
      } else if (item.includes('full-set')) {
        total += 25;
      } else if (item.includes('soak-off')) {
        total += 15;
      }
    });
    let contactInfo = contact.join(', ');

    alert(`You've chosen: ${output} 
    your total is $ ${total}`);
    alert(`Provided contact information: ${contactInfo}`);
    console.log(contactInfo);
  }
}
