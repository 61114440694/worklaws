import React from "react";
import "../App.css";

function page2() {
  const x = {
    weight: 350,
    height: 350,
  };

  return (
    <div>
      <div>
        <center>
          <h1>Pop Corn</h1>
          <img
            style={x}
            src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixid=MXwxMjA3fDB8MHxzZWFyY
                        2h8OTV8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />

          <p>
            <b>วัตถุดิบทำป๊อบคอร์น</b>
          </p>
          <ul>
            <li>เมล็ดข้าวโพดแบบผีเสื้อหรือแบบกลม 55 กรัม</li>
            <li>น้ำตาลทราย 50 กรัม</li>
            <li>เกลือ ปลายช้อนชา</li>
            <li>เนยสดหรือมาการีน 70 กรัม</li>
            <li>น้ำมันพืช 1/2 ช้อนโต๊ะ</li>
          </ul>
          <br />

          <p>
            <b>วิธีทำ</b>
          </p>

          <ul>
            <li>ใส่เมล็ดข้าวโพดดิบลงในชาม เติมน้ำตาลทรายและเกลือ เตรียมไว้</li>
            <li>ตั้งกระทะใส่เนยลงไป ใช้ไฟอ่อน เติมน้ำมันพอละลาย</li>
            <li>
              ใส่ข้าวโพด คนให้เข้ากันจนเนยกับน้ำตาลละลาย ปิดฝา เร่งไฟให้แรงขึ้น
              เขย่ากระทะกันไหม้
            </li>
            <li>พอข้าวโพดสุกพองทั่ว เปิดฝา ตักใส่ภาชนะ</li>
          </ul>
        </center>
      </div>
    </div>
  );
}

export default page2;
