// ฟังก์ชันทำงานเมื่อโหลดหน้าเว็บเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. อัปเดตปีปัจจุบันใน Footer อัตโนมัติ
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // 2. ระบบทักทายตามช่วงเวลา (Good Morning/Afternoon)
    const greetingMsg = document.getElementById('greeting-msg');
    const hour = new Date().getHours();
    
    if (hour < 12) {
        greetingMsg.textContent = "☀️ สวัสดีตอนเช้าครับ";
    } else if (hour < 18) {
        greetingMsg.textContent = "🌤️ สวัสดีตอนบ่ายครับ";
    } else {
        greetingMsg.textContent = "🌙 สวัสดีตอนเย็นครับ";
    }

    // 3. คลิกที่อีเมลแล้ว Copy อัตโนมัติ
    const emailContact = document.getElementById('email-contact');
    
    emailContact.addEventListener('click', () => {
        const emailText = emailContact.innerText;
        
        // คำสั่ง Copy ลง Clipboard
        navigator.clipboard.writeText(emailText).then(() => {
            alert('คัดลอกอีเมลเรียบร้อยแล้ว: ' + emailText);
        }).catch(err => {
            console.error('ไม่สามารถคัดลอกได้', err);
        });
    });
});