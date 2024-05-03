from flask import Flask, render_template, request, redirect
import os
import openpyxl

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('sign_in.html')

@app.route('/save_data', methods=['POST'])
def save_data():
    # Get form data
    name = request.form.get('name')
    email = request.form.get('email')
    password = request.form.get('password')

    # Write data to Excel file
    excel_file = 'data_bot1.xlsx'
    if os.path.exists(excel_file):
        wb = openpyxl.load_workbook(excel_file)
    else:
        wb = openpyxl.Workbook()
        wb.active.append(['Name', 'Email', 'Password'])  # Add header row if file is newly created

    ws = wb.active
    ws.append([name, email, password])
    wb.save(excel_file)

    return redirect('/bot.html')  # Redirect to bot.html after sign-in

if __name__ == '__main__':
    app.run(debug=True)