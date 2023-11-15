function calculateResult() {
      const subjects = ['subject1', 'subject2', 'subject3', 'subject4', 'subject5', 'subject6'];
      let totalScore = 0;

      for (const subject of subjects) {
        const inputElement = document.getElementById(subject);
        const score = parseFloat(inputElement.value) || 0;

        if (score > 100) {
          console.error(`Error: Input for ${subject} exceeds maximum limit (100)`);
          return;
        }

        totalScore += score;

        // Apply color based on score
        if (score >= 80) {
          inputElement.style.backgroundColor = 'lightgreen';
        } else if (score >= 60) {
          inputElement.style.backgroundColor = 'yellow';
        } else {
          inputElement.style.backgroundColor = 'salmon';
        }
      }

      const percentage = (totalScore / (subjects.length * 100)) * 100;
      const gradePoint = calculateGradePoint(percentage);

      const resultMessage = `Total Score: ${totalScore}\nPercentage: ${percentage.toFixed(2)}%\nGrade Point: ${gradePoint}\n${(percentage >= 40) ? "Result: Pass" : "Result: Fail"}`;
      
      alert(resultMessage);
    }

    function calculateGradePoint(percentage) {
      if (percentage >= 90) {
        return 'A+';
      } else if (percentage >= 80) {
        return 'A';
      } else if (percentage >= 70) {
        return 'B';
      } else if (percentage >= 60) {
        return 'C';
      } else if (percentage >= 50) {
        return 'D';
      } else {
        return 'F';
      }
    }

    function clearForm() {
      const inputs = document.querySelectorAll('.score-input');

      for (const input of inputs) {
        input.value = '';
        input.style.backgroundColor = '';
      }
    }

