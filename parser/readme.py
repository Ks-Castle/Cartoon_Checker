from datetime import datetime
import json

def get_timestamp():
    return datetime.today().strftime('%Y.%m.%d')

def inject_result_to_readme():
    with open('../Readme.md') as readme:
        timestamp = get_timestamp()
        updated_content = ( f'> Auto Updated Date: {timestamp}\n\n')
    with open('../Readme.md', 'w') as readme:
        readme.write(updated_content)