"""
SKF Bearing Fit Calculator — Python Flask Server
Ejecutar: python app.py
Se abrirá automáticamente en el navegador
"""

from flask import Flask, send_from_directory
import webbrowser
import os
import threading

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

def open_browser():
    """Abre el navegador después de que el servidor inicie"""
    webbrowser.open('http://127.0.0.1:5000')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    # Abrir navegador automáticamente después de 1.5 segundos
    threading.Timer(1.5, open_browser).start()
    print(f"\n  [OK] SKF Bearing Fit Calculator")
    print(f"  [WEB] http://127.0.0.1:{port}")
    print(f"  [INFO] Ctrl+C para detener\n")
    app.run(host='127.0.0.1', port=port, debug=False)
