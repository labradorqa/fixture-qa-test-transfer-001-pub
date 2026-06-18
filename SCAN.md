# Scan profile: PYTHON (deps + py code)

requirements.txt 취약 pip 의존성 + pyapp/config.py·db.py 코드 취약점. PyYAML/requests/SQLAlchemy/lxml 이 함수에서 실제 호출됨(reachability) + SAST.
